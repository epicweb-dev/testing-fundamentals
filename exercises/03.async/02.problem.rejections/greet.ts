export function greet(name: string) {
	const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' })

	return `Hello, ${name}! Happy, ${weekday}.`
}

export async function greetByResponse(response?: Response) {
	if (typeof response === 'undefined') {
		throw new Error('Failed to greet the user: no user response provided')
	}

	const user = await response.json()
	return greet(user.firstName)
}

export function congratulate(name: string) {
	return `Congrats, ${name}!`
}
