// setTimeout(function() {
//     console.log(this)
// })

// setTimeout은 누군가에 의해 씌여진 함수이다.
// 그래서 내가 this가 어디를 참조하는지 잘 알수가 없다.
// setTimeout은 아래를 따를 것이다. 아마.

// const setTimeout = function(fun) {
//     const newObject = {}
//     newObject.method = fun
//     newObject.method()
// }

// set이 동작하는 방법을 굳이 까보자면 위와 같을 것이다.
// setTimeout은 콜백함수를 받고,,
// 그것이 새로운 객체에 담기고
// 새로운 객체의 메소드에 콜백함수가 담기며,
// 그것이 실행이 된다.

// 이러한 현상 때문에, setTimeout을 프로토타입 내부에서 썼을 때 this가 꼬이는 경우가 생긴다.
// const arr = [1, 2, 3]
// Array.prototype.delayedLast = function() {
//     setTimeout(function() {
//         console.log(this[this.length - 1])
//     }, 1000)
// }
// arr.delayedLast()

// 해결하는 방법은 this를 미리 다른 변수에 저장해놓고, 아규먼트로써 사용하는 방법이 있다.
// const arr = [1, 2, 3]
// Array.prototype.delayedLast = function() {
//     const self = this
//     setTimeout(function () {
//         console.log(self[self.length - 1])
//     }, 1000)
// }
// arr.delayedLast()
// 이 경우, this의 참조가 변수 self에 저장이 되어 있다. 이것을 참고해서 setTimeout을 사용할 수 있다.

// function Person(age) {
//     this.age = age
// }
// Person.complain = function() {
//     if (this.age >= 100) return 'i am getting way to old'
//     return 'i am not old enough'
// }
// const yoda = new Person(419)
// console.log(yoda);
// console.log(Person);
// console.log(yoda.complain());

// 이 상태에서는 에러가 출력된다. 왜냐하면 complain 펑션이 Person에 있는 것이지,
// Person.prototype에 있는게 아니기 때문이다.
// 따라서 yoda.complain으로 접근했을 때, yoda의 프로퍼티에는 complain이 존재하지 않는다.
// 그래서 이것은 Object.prototype에 위치할 Person.prototype을 체크하는데
// 거기에도 complain이 있지가 않다. (그냥 Person이라는 함수에 존재할 뿐이다.)
// 그래서 complatin은 아예 없으니 undefined가 나오는데 이건 함수가 아니니 에러가 출력된다.
// 이를 수정하려면 Person.complain.call(yoda)와 같이 부르면 되는데, 이것은 좀 웃기다.
// 이것을 고치기 위해 complain을 만들 때 Person.prototype.complain = function() {} 식으로 선언해라. 그냥

function Person(age) {
    this.age = age
}
Person.prototype.complain = () => {
    console.log(this);
    if (this.age >= 100) return 'i am getting way to old'
    return 'i am not old enough'
}

const yoda = new Person(419)
console.log(yoda.complain());

// 로직에러가 난다.
// Person.prototype.complain을 정의하고, 화살표 함수로 셋팅을 했다.
// 애로우 펑션은 this를 현재 값에 묶는다.