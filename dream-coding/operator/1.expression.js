let b; // 선언문
b = 2; // 표현식, 할당문

// let a = let b; 에러 발생. let b는 값을 생성하지 않아서 let a에 할당할 수 없음.
// 값 외에는 할당할 수 없음

let a = b = 2;
console.log(a);
