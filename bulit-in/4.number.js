const num1 = 123;
const num2 = new Number(123);
console.log(typeof num1);
console.log(typeof num2);

console.log(Number.MAX_VALUE); // e+308 = 10 ^ 308
console.log(Number.MIN_VALUE); //
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if(num1 < Number.MAX_VALUE) {
}
if(Number.isNaN(num1)){
}

// 지수표기법 (매우 크거나 작은 숫자를 표기할 때 사용)
const num3 = 102;
console.log(num3.toExponential());

//반올림하여 문자열로 변환
const num4 = 1234.12;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG'));

// 원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); // 전체 자릿수 표기가 안될때는 지수표기법
console.log(Number.EPSILON);  // 0과 1 사이에서 나타낼 수 있는 가장 작은 숫자
if(Number.EPSILON > 0 && Number.EPSILON < 1) {
    console.log(Number.EPSILON);
}

// 10진수가 2진수로 변환된 후 2진수가 다시 10진수로 반환됨.
// 위의 과정에서 정확하게 부정소수점까지 계산되지않음.
const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(original, expected) {
    return original === expected;
    // original - expected < Number.EPSILON;
    // Math.abs(original - expected) < Number.EPSILON;
}

console.log(isEqual(1,1));
console.log(isEqual(0.1,0.1));
console.log(isEqual(num,0.1));