// 래퍼 객체 (Wrapper Object)
// 원시값을 필요에 따라서 관련된 빌트인 객체로 변환한다.

const number = 123;
console.log(number);  // number 원시타입
console.log(number.toString());  // number 문자열 변환 후 출력

const text = 'text';  // string 문자열 원시타입
console.log(text);
text.length  // String 객체
text.trim();

// 원시값을 객체로 감싼다해서 wrapper 객체이다.
// 