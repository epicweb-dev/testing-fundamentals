import { greet, congratulate } from './greet.js'

// 🐨 In the test, we need to mock the date returned
// from the "Date" constructor. Proxy that constructor
// using the "Proxy.revocable()" API in JavaScript.
// 💰
// const dateProxy = Proxy.revocable(globalThis.Date, {
//   construct: Date => new Date('2024-01-01'),
// })

// 🐨 Next, call the global "beforeAll" function, passing it
// an empty arrow function as the "callback" argument.

// 🐨 In the callback to "beforeAll", replace the global "Date"
// object with the "dateProxy".
// 💰 globalThis.Date = dateProxy.proxy

// 🐨 Call the global "afterAll" function, passing it
// an empty arrow function as the "callback" argument.

// In the callback to "afterAll", restore the global "Date"
// 🐨 object so it's no longer mocked.
// 💰 Use the "revoke()" method on the revocable Proxy.
// 💰 dateProxy.revoke()

test('returns a greeting message for the given name', () => {
	expect(greet('John')).toBe('Hello, John! Happy, Monday.')
})

test('returns a congratulation message for the given name', () => {
	expect(congratulate('Sarah')).toBe('Congrats, Sarah!')
})
