// let 재할당이 가능
let a = 1;
a = 2;

// const 재할당 불가
// 1. 상수
// 2. 상수변수 또는 변수
const text = 'hello';
// text = 'hi'; 이러면 typeError 남

// 1. 상수
const MAX_FRUITS = 5;

// 2. 재할당 불가능한 상수변수 또는 변수
const apple = {
    name: 'apple',
    color: 'red',
    display: 'red-apple',
};
// apple = {}; // 메모리 주소는 변경불가하지만

console.log(apple);

apple.name = 'orange';
apple.display = 'orange-orange';
console.log(apple);
// 힙 안에 있는 자료들은 변경이 가능하다. 
