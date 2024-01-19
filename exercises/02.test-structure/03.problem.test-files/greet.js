// 🐨 Export the "greet()" function so it can be imported
// and called in a newly added "greet.test.js" file.
function greet(name) {
	return `Hello, ${name}!`
}

// 🐨 Export the "congratulate()" function so we can use
// it in the tests in "greet.test.js" as well.
function congratulate(name) {
	return `Congrats, ${name}!`
}

// 🐨 Move the existing tests for "greet()" and "congratulate()"
// to the newly added "greet.test.js" file. Don't forget to
// import the "test()" and "congratulate()" functions there!
test('returns a greeting message for the given name', () => {
	expect(greet('John')).toBe('Hello, John!')
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})

// 🐨 Move the existing "expect()" and "test()" functions to the
// newly added "setup.js" file.
function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`Expected ${actual} to equal to ${expected}`)
			}
		},
	}
}

// 🐨 Expose the "expect()" and "test()" functions globally
// so any test file can access them without importing them.
// 💰 globalThis.expect = expect
// 💰 globalThis.test = test
function test(title, callback) {
	try {
		callback()
		console.log(`✓ ${title}`)
	} catch (error) {
		console.error(`✗ ${title}`)
		console.error(error, '\n')
	}
}
