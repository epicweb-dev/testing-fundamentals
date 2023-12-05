function greet(name) {
	return 'Hello, ${name}!'
}

function congratulate(name) {
	return `Congrats, ${name}!`
}

expect(greet('John')).toBe('Hello, John!')
expect(congratulate('Sarah')).toBe('Congrats, Sarah!')

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`Expected ${actual} to equal to ${expected}`)
			}
		},
	}
}
