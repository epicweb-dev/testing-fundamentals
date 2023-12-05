import { greet, congratulate } from './greet.js'

beforeAll(() => {
	globalThis.document = {
		title: 'My App',
	}
})

afterAll(() => {
	delete globalThis.document
})

test('returns a greeting message for the given name', () => {
	expect(greet('John')).toBe('Hello, John! Welcome to "My App"!')
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})
