interface Assertions {
	toBe(expected: unknown): void
}

declare global {
	var expect: (actual: unknown) => Assertions
	var test: (title: string, callback: () => void | Promise<void>) => void
	var beforeAll: (callback: () => void) => void
	var afterAll: (callback: () => void) => void
}

globalThis.expect = function (actual: unknown) {
	return {
		toBe(expected: unknown) {
			if (actual !== expected) {
				throw new Error(`Expected ${actual} to equal to ${expected}`)
			}
		},
	}
}

globalThis.test = async function (title, callback) {
	try {
		await callback()
		console.log(`✓ ${title}`)
	} catch (error) {
		console.error(`✗ ${title}`)
		console.error(error, '\n')
	}
}

globalThis.beforeAll = function (callback) {
	callback()
}

globalThis.afterAll = function (callback) {
	process.on('beforeExit', () => {
		callback()
	})
}
