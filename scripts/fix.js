// This should run by node without any dependencies
// because you may need to run it without deps.

import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const here = (...p) => path.join(__dirname, ...p)
const VERBOSE = false
const logVerbose = (...args) => (VERBOSE ? console.log(...args) : undefined)

const workshopRoot = here('..')
const examples = (await readDir(here('../examples'))).map(dir =>
	here(`../examples/${dir}`),
)
const exercises = (await readDir(here('../exercises')))
	.map(name => here(`../exercises/${name}`))
	.filter(filepath => fs.statSync(filepath).isDirectory())
const exerciseApps = (
	await Promise.all(
		exercises.flatMap(async exercise => {
			return (await readDir(exercise))
				.filter(dir => {
					return /(problem|solution)/.test(dir)
				})
				.map(dir => path.join(exercise, dir))
		}),
	)
).flat()
const exampleApps = (await readDir(here('../examples'))).map(dir =>
	here(`../examples/${dir}`),
)
const apps = [...exampleApps, ...exerciseApps]

const appsWithPkgJson = [...examples, ...apps].filter(app => {
	const pkgjsonPath = path.join(app, 'package.json')
	return exists(pkgjsonPath)
})

// update the package.json file name property
// to match the parent directory name + directory name
// e.g. exercises/01-goo/problem.01-great
// name: "exercises__sep__01-goo.problem__sep__01-great"

function relativeToWorkshopRoot(dir) {
	return dir.replace(`${workshopRoot}${path.sep}`, '')
}

await updatePkgNames()
await updateRootTsConfig()
await copyExerciseTsConfigs()
await copyExercisePrettierConfigs()

async function updatePkgNames() {
	for (const file of appsWithPkgJson) {
		const pkgjsonPath = path.join(file, 'package.json')
		const pkg = JSON.parse(await fs.promises.readFile(pkgjsonPath, 'utf8'))
		pkg.name = relativeToWorkshopRoot(file).replace(/\\|\//g, '__sep__')
		const written = await writeIfNeeded(
			pkgjsonPath,
			`${JSON.stringify(pkg, null, 2)}\n`,
		)
		if (written) {
			console.log(`updated ${path.relative(process.cwd(), pkgjsonPath)}`)
		}
	}
}

async function updateRootTsConfig() {
	const tsconfig = {
		files: [],
		exclude: ['node_modules'],
		references: appsWithPkgJson.map(a => ({
			path: relativeToWorkshopRoot(a).replace(/\\/g, '/'),
		})),
	}
	const written = await writeIfNeeded(
		path.join(workshopRoot, 'tsconfig.json'),
		`${JSON.stringify(tsconfig, null, 2)}\n`,
		{ parser: 'json' },
	)

	if (written) {
		// delete node_modules/.cache
		const cacheDir = path.join(workshopRoot, 'node_modules', '.cache')
		if (exists(cacheDir)) {
			await fs.promises.rm(cacheDir, { recursive: true })
		}
		console.log('all fixed up')
	}
}

async function copyExerciseTsConfigs() {
	const exercisesWithoutTsCongif = exerciseApps.filter((exercisePath) => {
		return !fs.existsSync(path.join(exercisePath, 'tsconfig.json'))
	})

	if (exercisesWithoutTsCongif.length === 0) {
		return
	}

	const tsConfigTemplate = await fs.promises.readFile(
		here('./tsconfig.json'),
		'utf8',
	)

	await Promise.all(exercisesWithoutTsCongif.map((exercisePath) => {
		const tsConfigPath = path.resolve(exercisePath, 'tsconfig.json')
		return fs.promises.writeFile(tsConfigPath, tsConfigTemplate)
	}))
}

async function copyExercisePrettierConfigs() {
	const prettierConfig = await fs.promises.readFile(
		path.join(workshopRoot, '.prettierrc'),
		'utf8',
	)
	await Promise.all(exerciseApps.map(exercise => {
		const prettierConfigPath = path.join(exercise, '.prettierrc')
		return fs.promises.writeFile(prettierConfigPath, prettierConfig)
	}))
}

async function writeIfNeeded(filepath, content) {
	const oldContent = await fs.promises.readFile(filepath, 'utf8')
	if (oldContent !== content) {
		await fs.promises.writeFile(filepath, content)
	}
	return oldContent !== content
}

function exists(p) {
	if (!p) return false
	try {
		fs.statSync(p)
		return true
	} catch (error) {
		return false
	}
}

async function readDir(dir) {
	if (exists(dir)) {
		return fs.promises.readdir(dir)
	}
	return []
}
