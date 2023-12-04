function greet(name) {
	return `Hello, ${name}!`
}

function congratulate(name) {
	return `Congrats, ${name}!`
}

test('returns a greeting message for the given name', () => {
	expect(greet('John')).toBe('Hello, John!')
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})

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
