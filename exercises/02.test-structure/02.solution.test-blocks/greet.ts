function greet(name: string) {
	return `Hello, ${name}!`
}

function congratulate(name: string) {
	return `Congrats, ${name}!`
}

test('returns a greeting message for the given name', () => {
	expect(greet('John')).toBe('Hello, John!')
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})

function expect(actual: unknown) {
	return {
		toBe(expected: unknown) {
			if (actual !== expected) {
				throw new Error(`Expected ${actual} to equal to ${expected}`)
			}
		},
	}
}

function test(title: string, callback: () => void) {
	try {
		callback()
		console.log(`✓ ${title}`)
	} catch (error) {
		console.error(`✗ ${title}`)
		console.error(error, '\n')
	}
}
