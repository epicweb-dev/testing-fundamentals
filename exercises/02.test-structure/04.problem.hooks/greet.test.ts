import { greet, congratulate } from './greet.js'

// 🐨 In the test, we need to mock the date returned
// from the "Date" constructor. First, store the original
// implementation of the "globalThis.Date" constructor
// 💰 const OriginalDate = globalThis.Date

// 🐨 Next, call the global "beforeAll" function, passing it
// an empty arrow function as the "callback" argument.
// 💰 beforeAll(() => {})

// 🐨 In the callback to "beforeAll", reassign the global "Date"
// constructor to a Proxy that returns a fixed date.
// 💰 globalThis.Date = new Proxy(globalThis.Date, {
//	construct: () => new OriginalDate('2024-01-01'),
// })

// 🐨 Call the global "afterAll" function, passing it
// an empty arrow function as the "callback" argument.
// 💰 afterAll(() => {})

// 🐨 In the callback to "afterAll", restore the global "Date"
// class to its original implementation.
// 💰 globalThis.Date = OriginalDate

test('returns a greeting message for the given name', () => {
	expect(greet('John')).toBe('Hello, John! Happy, Monday.')
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})
