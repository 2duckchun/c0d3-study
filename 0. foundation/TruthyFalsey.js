/* Every data is either truthy or falsey */

/*
Falsey: There are only six falsey values in JS.
false, 0, ""(empty string), undefined, null, NaN(Not a Number)

Truthy: EVERYTHING is truthy!
*/

/* What's the Point?
 Truthy and falsey properties are required for
 the following operators: !, ||, &&
*/

// Not Operator: !
const josh = !0 // true
const hannah = 0 // 0
const sirius = !hannah // true
const charity = !"" // true
const funny = !!"" // false
const bone = !!!"hello world" // false
const tricks = "hello" + !!0 // "hellofalse"
const zach = false // false
const final = zach === tricks // false
const semi = zach === !tricks // true

// And Operator: &&
/* the 'and' logical operator && evaluates the left
and right side's truthy and falsey values in the
following order : */

// if the left side is falsy, return that value.
const c = "" && "hello"
// c will be "". because the left side is falsey.

// if the left side is truthy, return the valuse on the right side.
let d = "hello" && false // false
d = "hello" && 5 // 5
d = 5 && "hello" // hello
d = true && "" // ""
d = 0 && "hello" // 0

/* && 논리연산자는 
비교하는 왼쪽값이 false이면 false를 출력하되
왼쪽값이 true이면 오른쪽 값을 출력한다.
양쪽이 참이어야 둘다 참이라는 의미를 약간 반영하되
전부 같지는 않다.
*/


// Or Operator: ||
/* The 'or' operator || evaluates the left and right
side's truthy and falsey values in the following order: */

let a = 7 || false // 7
a = false || "hello" // "hello"
a = 0 || "world" // "world"
a = 7 || 9 // 7 (first truthy value)

a = 7 && 9 // 9 (last truthy value)
a = 0 && "" // 0

let cedric = 5 && "hello" // "hello"
cedric = 5 && !"hello" // false
const albus = (5 + 5) || 0 // 10
const dumbledore = 0 || 10 // 10
const harry = albus > 5 && albus < 10 // false

/* &&과 ||는 부울값(true/false)과 연관이 크게 없다.
왼쪽 값과 오른쪽 값을 '선택'하는 것에 더 관계가 있다. */