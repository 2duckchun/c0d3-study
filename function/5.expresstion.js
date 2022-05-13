// 함수 선언문 function name() {}
// 함수 표현식 const name = function () {}

// 함수도 객체이기 때문에 객체를 다른 변수에 할당하거나 재할당이 가능

// 무명 함수
let add = function (a, b) {
    return a + b;
};

console.log(add(1, 2)); 

// 화살표 함수 const name = () => {}
add = (a, b) => {
    return a + b
};
console.log(add(1, 2));

add = (a, b) => a + b;
console.log(add(5, 6));

// 생성자 함수 const object = new Function(); // 뒤 객체편에서 다룸


// IIFE (immedicately-Invoked Function Expresstions)
(function run() {
    console.log('🤣');
})();
