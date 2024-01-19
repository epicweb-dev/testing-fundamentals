function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`Expected ${actual} to equal to ${expected}`)
			}
		},
	}
}

function test(title, callback) {
	try {
		callback()
		console.log(`✓ ${title}`)
	} catch (error) {
		console.error(`✗ ${title}`)
		console.error(error, '\n')
	}
}

function beforeAll(callback) {
	callback()
}

function afterAll(callback) {
	process.on('beforeExit', () => {
		callback()
	})
}

globalThis.expect = expect
globalThis.test = test
globalThis.beforeAll = beforeAll
globalThis.afterAll = afterAll
