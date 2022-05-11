// 동등 비교 관계 연산자 (Equality operators)
// == 값이 같은지 아닌지 비교함
// != 값이 다름을 확인
// === 값과 타입이 둘 다 같음
// !== 값과 타입이 다름

console.log(2 == 2);
console.log(2 != 2);
console.log(2 != 3);
console.log(2 == 3);
console.log(2 == '2');
console.log(2 === '2');  // 타입도 비교하는게 좋다!?
console.log(true == 1);
console.log(true === 1);
console.log(false == 0);
console.log(false === 0);
console.clear();

const obj1 = {
    name: 'js'
};
const obj2 = {
    name: 'js'
};

// 메모리 주소가 서로 다르다. 그래서 같지 않다고 나온다.

console.log(obj1 == obj2);
console.log(obj1 === obj2); // 타입은 오브젝트지만 값 자체가 다름.
console.log(obj1.name == obj2.name);
console.log(obj1.name === obj2.name);

let obj3 = obj2;
console.log(obj3 == obj2);
console.log(obj3 === obj2)