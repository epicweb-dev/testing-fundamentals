import { greet, greetByResponse, congratulate, NotificationManager } from './greet.js'

const DateProxy = Proxy.revocable(globalThis.Date, {
	construct: (Date) => new Date('2024-01-01')
})

beforeAll(() => {
	globalThis.Date = DateProxy.proxy
})

afterAll(() => {
	DateProxy.revoke()
})

test('returns a greeting message for the given name', () => {
	expect(greet('John')).toBe('Hello, John! Happy, Monday.')
})

test('returns a greeting message for the given user response', async () => {
	const response = Response.json({ firstName: 'Patrick' })
	expect(await greetByResponse(response)).toBe('Hello, Patrick! Happy, Monday.')
})

test('throws on greeting user with undefined user response', async () => {
	await expect(greetByResponse(undefined)).rejects.toThrow(
		new Error('Failed to greet the user: no user response provided')
	)
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})

test('displays a notification when a new user joins', () => {
	// Create a new notification manager.
	const manager = new NotificationManager()

	// Join with a new user.
	manager.showNotification(Response.json({ firstName: 'Kate' }))

	// Must show the notification for Kate.
	expect(manager.notifications[0]).toBe('Hello, Kate! Happy, Monday.')
})
