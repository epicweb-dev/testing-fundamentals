export function greet(name) {
	const weekday = new Date().toLocaleDateString(undefined, { weekday: 'long' })

	return `Hello, ${name}! Happy, ${weekday}.`
}

export async function greetByResponse(response) {
	if (typeof response === 'undefined') {
		throw new Error('Failed to greet the user: no user response provided')
	}

	const user = await response.json()
	return greet(user.firstName)
}

export function congratulate(name) {
	return `Congrats, ${name}!`
}

export class NotificationManager {
	constructor(options) {
		this.notifications = []
	}

	showNotification(response) {
		greetByResponse(response).then((greetingText) => {
			this.notifications.push(greetingText)
		})
	}
}
