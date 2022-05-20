// 배열의 함수들
// 배열 자체를 변경하는지, 새로운 배열을 반환하는지

const fruits = ['바나나', '사과', '레몬'];

// 특정한 오브젝트가 배열인지 체크
console.log(Array.isArray(fruits));
console.log(Array.isArray({}));

console.log(fruits.indexOf('레몬'));

// 배열안에 특정한 아이템이 있는지 체크
console.log(fruits.includes('사과'));

// 추가 - 제일 뒤
let length = fruits.push('복숭아', '용과'); // 배열 자체를 업데이트함.
console.log(fruits);
console.log(length);

// 추가 - 제일 앞
length = fruits.unshift('딸기'); // 배열 자체를 업데이트함.
console.log(fruits);
console.log(length);

// 제거 - 제일 뒤
let lastItem = fruits.pop(); // 배열 자체를 업데이트함.
console.log(fruits); 
console.log(lastItem); 

// 제거 - 제일 앞
lastItem = fruits.shift(); // 배열 자체를 업데이트함.
console.log(fruits); 
console.log(lastItem); 

// 중간에 추가 또는 삭제
const deleted = fruits.splice(1, 1);
console.log(fruits);
console.log(deleted);
fruits.splice(1, 0, '사과', '물엿');
console.log(fruits);