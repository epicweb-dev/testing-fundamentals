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

Reflect.set(globalThis, 'expect', expect)
Reflect.set(globalThis, 'test', test)
