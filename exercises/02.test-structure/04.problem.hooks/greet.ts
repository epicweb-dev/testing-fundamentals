export function greet(name: string) {
	const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' })

	return `Hello, ${name}! Happy, ${weekday}.`
}

export function congratulate(name: string) {
	return `Congrats, ${name}!`
}
