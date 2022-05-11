console.log('hi');

let integer = 123; // 정수
let negative = -123; // 음수
let double = 1.23; // 실수
console.log(integer);
console.log(negative);
console.log(double);

let binary = 0b1111011; // 2진수
let octal = 0o173; // 8진수
let hex = 0x7b; // 16진수
console.log(binary);
console.log(octal);
console.log(hex);

console.log(0/123); // 0
console.log(123/0); // infinity
console.log(123/-0); // -infinity
console.log(123/'text'); // NaN(Not a Number)
// 자바스크립트는 숫자변수 넣는게 크게 신경쓸 것이 없다.

let bigInt = 123123102941409804124812094184104141n;
console.log(bigInt);