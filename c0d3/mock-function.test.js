const a = jest.fn()

a() // a is run without any arguments.
console.log(a.mock.calls.length) // a.mock.calls is an array of length 1

a('hello', 'world') // a is run with 2 arguments.
console.log(a.mock.calls.length) // a.mock.calls is an array of length 2

a('test', 1, 9, 100) // a is run with 4 arguments.
console.log(a.mock.calls.length) // a.mock.calls is an array of length 3

a(() => {
  console.log('hello')
}) // a is run with 1 argument
console.log(a.mock.calls.length) // a.mock.calls is an array of length 4

console.log(a.mock.calls)
/*
[
  [],
  ['hello', 'world'],
  ['test', 1, 9, 100],
  [ function ]
]
*/

// a.mock.calls[0] is empty array because the first call has no arguments.
// a.mock.calls[1] contains array of arguments passed into the function.
// a.mock.calls[2] contains an array of arguments passed into the function.
// a.mock.calls[3] contains an array of arguments passed into the function.

a.mock.calls[3][0]() // prints out 'hello'
