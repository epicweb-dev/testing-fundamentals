import { greet, congratulate } from './greet.js'

const OriginalDate = globalThis.Date

beforeAll(() => {
	globalThis.Date = function() {
		return new OriginalDate('2024-01-01')
	}
})

afterAll(() => {
	globalThis.Date = OriginalDate
})

test('returns a greeting message for the given name', () => {
	expect(greet('John')).toBe('Hello, John! Happy, Monday.')
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})
