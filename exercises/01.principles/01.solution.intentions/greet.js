function greet(name) {
	return `Hello, ${name}!`
}

let message = greet('John')

if (message !== 'Hello, John!') {
	throw new Error(
		`Expected message to equal to "Hello, John!" but got "${message}"`,
	)
}
