/* if (condition) {
    (condition이 truthy할 때 실행될 것들)
} */

/* 자바스크립트는 모든것들이 truthy하거나
falsey하거나라서 condition에는 모든 것들이 들어갈 수 있다.
*/

// let a = 100
// if (a % 2) {
//     // a % 2 is 0, which is falsey
//     a = 90 // so everything inside { } will not be executed
// }
// const b = a + 1 // 101

// let a = 9 || 4 // 9 is truthy
// if (a > 5) {
//     a = 90
// }
// const b = a + 1 // 91


/* else statement 
else는 if의 컨디션이 falsey할 때
실행되는 구문을 작성하는 것이다!
*/

const total = 6
let result = ""
if (total < 5) {
    result = "fail"
} else {
    result = "Pass"
}

console.log(result);

/* 
As with coding in general, if you don't need it, don't use it!

Many engineers make the mistake of using else whenever they use if.
Only use else if you need to use it. You will slowly build an intuition over time, 
just pay attention to your code review feedback from people reviewing your code.
*/