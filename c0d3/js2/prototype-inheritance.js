// Now that you know a few array functions:
// 몇가지 어레이 펑션에 대해 알아보았다.

// Add / remove: push, pop, shift, unshift
// 추가 / 삭제 : push, pop, shift, unshift

// Helpers: map, filter, find, reduce
// 헬퍼 펑션 : map(새로운 배열 만듬), filter(새로운 배열 만듬), find(조건에 맞는 배열 속 엘리먼트를 반환), reduce(배열내부를 순회하며 누산치를 만듦)

// What if you wanted to add new functions to arrays? For example:
// 만약 어레이 펑션을 새로이 만들고 싶다면??

// [9,8,6,1].last() to return the last element of the array
// [9,8,6,1].last()는 어레이의 마지막 엘리먼트를 리턴함.

// [1,2,3,4,5].evens() to return an array of even numbers
// evens()는 어레이 내의 짝수로 된 엘리먼트를 리턴함.

// Here are the steps to add your own customized function for arrays:
// 여기 어레이 펑션을 커스터마이즈할 수 있는 방법이 있다.


// Define your function using function( ... parameters ...) { ... code ...}.
// 함수를 정의해라. function() {} 의 방식으로...

// The difference between function and () => {} is described thoroughly in the next lesson.
// 애로우 펑션과 위 정의함수의 차이는 다음 레슨에서 철저히 배울 것임.

// Assign your function to Array.prototype.
// 내가 만든 함수를 Array.prototype에 할당해라 = Array.prototype.ttt = function () {}

// Access array properties using the this keyword.
// this 키워드를 통해 어레이의 프로퍼티에 접근해라.

// Note that this is a system keyword. Do not name your variables this!
// 이 this는 시스템 키워드이며 변수 this가 아니다.


Array.prototype.last = function () {
    return this[this.length - 1]
};

const b = [1, 2, 3].last()
// When the last function is run, 'this' refers to [1,2,3]
// last function이 동작될때 this는 [1, 2, 3] 을 참조하게 된다.
console.log(b);

Array.prototype.papaya = function (i = 0, z = 0) {
    if (i === this.length) return z
    return this.papaya(i + 1, this[i] + z)
}
const juicy = [7, 8, 2].papaya
console.log(juicy);

const juicy2 = [7, 8, 2].papaya()
console.log(juicy2);

// 이런건 될까? 
// const c = juicy()
// console.log(c);

// The examples above shows how you can add new functions into arrays. This approach is called prototype inheritance. But why?
// 위의 샘플은 어떻게 새로운 펑션을 어레이에 추가하는지 알려주는 것이다. 이 접근법은 프로토타입 인헤리턴스라고 부른다.

// Prototype - Because you are assigning your function to Array.prototype. More details covered in the next lesson.
// Prototype : 펑션을 Array.prototype이라는 것에 할당했기 때문이다.

// Inheritance - Because in the following example, all existing arrays inherit the new function.
// Inheritance - 예시에 따라, 모든 존재하는 어레이들은 이 펑션을 상속받게 된다.\

const a = [9, 8, 7]

Array.prototype.greet = function () {
    return this[0]
}

a.greet() // return 9

/*
Even though Array.prototype.greet is executed after a is defined, 
a still has the function greet.

Array.prototype.greet가 a 뒤에 선언되었더라도
a는 여전히 function greet를 받고 있다.

a inherited the function!
a는 펑션을 상속받았다!
*/