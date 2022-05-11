// 증가 & 감소 연산자 Increment & Decrement Operators

let a = 0;
console.log(a);

a++;
console.log(a);

a--;
console.log(a);

console.clear();
// 주의!
// a++ 필요한 연산을 하고, 그 뒤 값을 증가.
// ++a 값을 증가시키고, 필요한 연산을 함.

a = 0;
// console.log(a++);
// console.log(a);
let b = a++;
console.log(a);
console.log(b); // 필요한 연산(할당)을 하고 그 뒤 값을 증가.
console.log(a);