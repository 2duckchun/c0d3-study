let array = new Array(3);  // array class
console.log(array);

array = new Array(1, 2, 3);  // array class
console.log(array);

array = Array.of(1, 2, 3, 4, 5);  // static function
console.log(array);

const anotherArray = ['g', 2, 3, 4];
console.log(anotherArray);

array = Array.from(anotherArray);  // static function
console.log(array); 

//iterable = 순회가 가능한

// 일반적으로 배열은 동일한 메모리 크기를 가지며,
// 연속적으로 이어져 있어야 함.
// 하지만 JS의 배열은 연속적으로 이어져있지 않음. (보장X)
// 오브젝트와 유사함(사실 똑같음)
// 자바스크립트의 배열은 일반적인 배열의 동작을 흉내낸 특수한 객체임.
// 이를 보완하기 위해서 타입이 정해져 있는 타입 배열이 있음. 
// (Typed Collection!!)

array = Array.from({
    0: '안',
    1: '녕',
    length: 2,
})

console.log(array);