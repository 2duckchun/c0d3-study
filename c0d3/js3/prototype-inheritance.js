<<<<<<< HEAD
/*
Prototype functions are great for memory efficiency when you plan on constructing many Objects.
// 프로토타입 펑션은 많은 오브젝트를 만들어낼 때 굉장히 메모리 효율적인 방법이다. 

Want to add functions into every object that you create? Just assign them to Object.prototype. To make this work, you must:
오든 오브젝트마다 펑션을 만들어낸다면? 그냥 Object.prototype을 만들어라.

만드는 방법은 아래와 같습니다.

Define your function using function( ... params ... ) { ... code ...}
함수를 정의해라 function() {}
() => {}는 this를 활용할 수 없기 때문에 위처럼 선언식으로 한다.

만든 함수를 Object.prototype에 할당한다.

프로퍼티에 this 키워드를 통해 접근한다.
*/

Object.prototype.forEach = function (
    fun, i = 0, entries = Object.entries(this)
) {
    if (i === entries.length) return
    fun(entries[i][1], entries[i],[0])
    return this.forEach(fun, i + 1)
}
=======
/* 
Prototype functions are great
for memory efficiency when you plan on constructing many Objects.
*/

// Object.prototype.eat = function (value) {
//     const num = this.data || 0
//     if (value < num) {
//         return
//     }
//     this.data = value
// }

// const a = {name : 'iron'}
// a.eat(5)

// a.eat(3)

// a.eat(30)

/*
When you construct a new Object with the new keyword,
there are a few things that are happening in the background for you. 
This involves how the this is defined and used.
*/

>>>>>>> 901051feb63ff1f1711104e50cad62ec350e1d57
