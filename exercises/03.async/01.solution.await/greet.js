export function greet(name) {
	const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' })

	return `Hello, ${name}! Happy, ${weekday}.`
}

export async function greetByResponse(response) {
	const user = await response.json()
	return greet(user.firstName)
}

export function congratulate(name) {
	return `Congrats, ${name}!`
}
