interface Assertions {
	toBe(expected: unknown): void
}

declare global {
	var expect: (actual: unknown) => Assertions
	var test: (title: string, callback: () => void) => void
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

globalThis.test = function (title, callback) {
	try {
		callback()
		console.log(`✓ ${title}`)
	} catch (error) {
		console.error(`✗ ${title}`)
		console.error(error, '\n')
	}
}
