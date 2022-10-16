/*
Mock function은 페이크 펑션이다.
아무것도 하지 않는다. 하지만 얼마나 이것이
호출되었는지 기록하는 역할을 한다.

아규먼트가 호출될때마다 이를 기록한다.
우리는 jest.fn을 이용해 이러한
목업 펑션을 생성할 수 있다.

목업 펑션은 함수가 호출된 모든 시간에 대한 어레이를 가지고 있다.
접근은 아래와 같이 진행할 수 있다.
*/

// a is a mock function.

import pkg from '@jest/globals';
const {jest} = pkg; 
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