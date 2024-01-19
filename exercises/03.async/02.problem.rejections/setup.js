function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`Expected ${actual} to equal to ${expected}`)
			}
		},
		// 🐨 Add a new property to this object called "rejects".
		// 💰 rejects: {}

		// 🐨 In the "rejects" object, create a new property called
		// "toThrow". Make it a function that accepts a single argument:
		// the "expected" error.
		// 💰 rejects: { toThrow(expected) }

		// 🐨 In the "toThrow()" function, listen to when the "actual"
		// Promise rejects, and compare the rejection error message
		// with the "expected" error message from the "toThrow()" argument.
		// 💰 return actual.catch((error) => { ... })

		// 🐨 Bonus points if you make "toThrow()" function throw an error
		// if the "actual" Promise *resolves*.
	}
}

async function test(title, callback) {
	try {
		await callback()
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
	process.addListener('beforeExit', () => {
		callback()
	})
}

globalThis.expect = expect
globalThis.test = test
globalThis.beforeAll = beforeAll
globalThis.afterAll = afterAll
