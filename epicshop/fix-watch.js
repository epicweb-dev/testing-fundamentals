import path from 'node:path'
import { fileURLToPath } from 'node:url'
import chokidar from 'chokidar'
import { $ } from 'execa'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const here = (...p) => path.join(__dirname, ...p)

const workshopRoot = here('..')

const watchPath = path.join(workshopRoot, './exercises/*')
const watcher = chokidar.watch(watchPath, {
	ignored: /(^|[/\\])\../, // ignore dotfiles
	persistent: true,
	ignoreInitial: true,
	depth: 2,
})

const debouncedRun = debounce(run, 200)

// Add event listeners.
watcher
	.on('addDir', () => {
		debouncedRun()
	})
	.on('unlinkDir', () => {
		// Only act if path contains two slashes (excluding the leading `./`)
		debouncedRun()
	})
	.on('error', error => console.log(`Watcher error: ${error}`))

/**
 * Simple debounce implementation
 */
function debounce(fn, delay) {
	let timer = null
	return (...args) => {
		if (timer) clearTimeout(timer)
		timer = setTimeout(() => {
			fn(...args)
		}, delay)
	}
}

let running = false

async function run() {
	if (running) {
		console.log('still running...')
		return
	}
	running = true
	try {
		await $({
			stdio: 'inherit',
			cwd: workshopRoot,
		})`node ./epicshop/fix.js`
	} catch (error) {
		throw error
	} finally {
		running = false
	}
}

console.log(`watching ${watchPath}`)

// doing this because the watcher doesn't seem to work and I don't have time
// to figure out why 🙃
console.log('Polling...')
setInterval(() => {
	run()
}, 1000)

console.log('running fix to start...')
run()
