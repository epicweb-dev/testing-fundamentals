function greet(name: string) {
	return `Hello, ${name}!`
}

function congratulate(name: string) {
	return `Congrats, ${name}!`
}

let message = greet('John')

// 🐨 Replace these if/throw blocks with the "expect" function
// you will introduce later down this file.
// 💰 expect(greet('John')).toBe('Hello, John!')
if (message !== 'Hello, John!') {
	throw new Error(
		`Expected message to equal to "Hello, John!" but got "${message}"`,
	)
}

message = congratulate('Sarah')
if (message !== 'Congrats, Sarah!') {
	throw new Error(
		`Expected message to equal to "Congrats, Sarah!" but got "${message}"`,
	)
}

// 🐨 Create a function called "expect" that accepts a single argument:
// the "actual" value.

// 🐨 From the "expect" function, return an object that has
// a "toBe" property, which equals to a new function.
// The "toBe" function accepts the "expected" argument.
// 💰 Use shorthand function declaration on objects:
// return { toBe(expected) {} }

// 🐨 In the "toBe" function, compare the "actual" and the "expected"
// values, and throw an error if they don't match.
// 💰 You can throw an error like this one:
// new Error(`Expected ${actual} to equal to ${expected}`)
