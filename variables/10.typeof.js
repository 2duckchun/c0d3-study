//typeof : 데이터 타입 확인.
//값을 타입 문자열로 반환해주는 연산자.

let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123; // 할당된 값에 따라 타입이 결정된다.
console.log(typeof variable);

// strongly type, weakly type

variable = {};
console.log(typeof variable);

variable = function() {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);

console.log(typeof 123);
console.log(typeof '123');