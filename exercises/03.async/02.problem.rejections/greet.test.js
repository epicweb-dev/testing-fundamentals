import { greet, greetByResponse, congratulate } from './greet.js'

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
	// 🐨 Use the newly created ".rejects.toThrow(error)" assertion
	// to make sure that the "greetByResponse()" function throws if
	// it's given undefined as the argument.
	// 💰 expect(greetByResponse(undefined)).rejects.toThrow(...)
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})
