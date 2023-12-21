function greet(name) {
	// 🐨 Looks like someone has tempered with the implementation...
	return `Howdy, ${name}!`
}

let message = greet('John')

if (message !== 'Hello, John!') {
	throw new Error(
		`Expected message to equal to "Hello, John!" but got "${message}"`,
	)
}
