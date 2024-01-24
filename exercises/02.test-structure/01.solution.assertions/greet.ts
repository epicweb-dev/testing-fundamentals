function greet(name: string) {
	return `Hello, ${name}!`
}

function congratulate(name: string) {
	return `Congrats, ${name}!`
}

expect(greet('John')).toBe('Hello, John!')
expect(congratulate('Sarah')).toBe('Congrats, Sarah!')

function expect(actual: unknown) {
	return {
		toBe(expected: unknown) {
			if (actual !== expected) {
				throw new Error(`Expected ${actual} to equal to ${expected}`)
			}
		},
	}
}
