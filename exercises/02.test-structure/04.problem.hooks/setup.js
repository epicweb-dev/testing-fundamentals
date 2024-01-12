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

// 🐨 Create a new function called "beforeAll" that accepts
// a single argument: the "callback" function.

// 🐨 In the "beforeAll" function, call the "callback" function.

// 🐨 Next, create a new function called "afterAll".
// Similar to "beforeAll", it accepts a "callback" argument.

// 🐨 In the "afterAll" function, call the "callback" function
// only when the tests's are done.
// 💰 The tests are done when the Node.js process exits.
// You can add the "beforeExit" event listener on the "process" object
// to know when that happens!

globalThis.expect = expect
globalThis.test = test

// 🐨 Finally, set the newly created "beforeAll" and "afterAll"
// functions on the "globalThis" object. This will make them available
// globally in our tests.
