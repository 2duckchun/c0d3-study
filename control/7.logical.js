// 논리연산자 Logical operator
// && 그리고
// || 또는
// ! 부정(단항연산자에서 온 것)
// !! 특정값을 불리언값으로 변환(단항연산자 응용)

let num = 8;
if (num >= 0 || num > 20) {
    console.log('굳');
}

if(num != 9) {
    console.log('굳');
}

console.log(true && true);  // true
console.log(true && false);  // false
console.log(false && true);  // false
console.log(false && false);  // false

console.log(true || true);  // true
console.log(true || false);  // true
console.log(false || true);  // true
console.log(false || false);  // false

console.log(!'text');
console.log(!!'text');