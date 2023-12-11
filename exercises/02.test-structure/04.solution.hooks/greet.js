export function greet(name) {
	const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' })

	return `Hello, ${name}! Happy, ${weekday}.`
}

export function congratulate(name) {
	return `Congrats, ${name}!`
}
