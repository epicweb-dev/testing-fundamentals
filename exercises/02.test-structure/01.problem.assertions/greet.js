function greet(name) {
  return `Hello, ${name}!`
}

function congratulate(name) {
  return `Congrats, ${name}!`
}

let message = greet('John')

if (message !== 'Hello, John!') {
  throw new Error(
    `Expected message to equal to "Hello, John!" but got "${message}"`,
  )
}

message = congratulate('Sarah')
if (message !== 'Congrats, Sarah!') {
  throw new Error(
    `Expected message to equal to "Congrats, Sarah!" but got "${message}"`,
  )
}
