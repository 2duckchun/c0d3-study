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

const jest = require('jest')
console.log(jest);

const a = jest.fn()

a()
console.log(a.mock.calls.length);
a('hello', 'world')
console.log(a.mock.calls.length);
a('test', 1, 9, 100)
console.log(a.mock.calls.length);

a(() => {
    console.log(hello);
})
console.log(a.mock.calls.length);

console.log(a.mock.calls)