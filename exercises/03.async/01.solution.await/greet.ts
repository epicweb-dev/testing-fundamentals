export function greet(name: string) {
	const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' })

	return `Hello, ${name}! Happy, ${weekday}.`
}

export async function greetByResponse(response: Response) {
	const user = await response.json()
	return greet(user.firstName)
}

export function congratulate(name: string) {
	return `Congrats, ${name}!`
}
