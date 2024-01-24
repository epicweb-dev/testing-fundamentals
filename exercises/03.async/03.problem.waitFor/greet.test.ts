import {
	greet,
	greetByResponse,
	congratulate,
	NotificationManager,
} from './greet.js'

const DateProxy = Proxy.revocable(globalThis.Date, {
	construct: Date => new Date('2024-01-01'),
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
		new Error('Failed to greet the user: no user response provided'),
	)
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})

// 🐨 Create a "waitFor()" function that accepts a single argument:
// a "callback" function.
// 💰 function waitFor(callback) {}

// 🐨 In the "waitFor()" function, call the "callback" function.
// - If it doesn't throw, return.
// - If it throws, re-run it after a 250ms interval.
// - Retry the callback 5 times. If it still throws,
// throw the last thrown error as-is.
// 💰 Use a "while" loop and an early return to break it.
// while (retries < maxRetries) {
//   try {
//     retries++
//     callback()
//     return
//   } catch (error) {
//     if (retries === maxRetries) {
//       throw error
//     }
//     await new Promise(resolve => setTimeout(resolve, 250))
//   }
// }

test('displays a notification when a new user joins', () => {
	const manager = new NotificationManager()
	manager.showNotification(Response.json({ firstName: 'Kate' }))

	// 🐨 Use the newly created "waitFor()" function
	// to wrap this assertion and, thus, await it to eventually resolve.
	expect(manager.notifications[0]).toBe('Hello, Kate! Happy, Monday.')
})
