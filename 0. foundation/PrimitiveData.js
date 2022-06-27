//Number, String, Boolean

/* Number allows me to work with numbers and 
can be manipulated using operators such as
< +, -, *, / >(addition, substraction, multiplication or division)
*/

const fi = 5 // 5
const mission = fi + 1 // 6
const deed = fi + mission // 11
const space = 8 * 8 // 64
const ship = space / 4 // 16

/* One commonly used operator is %
(Modulus or Division Remainder), which
gives you the remainder when you divide 2 number. */

let rem = 15 % 3 // 0
rem = 15 % 7 // 1

console.clear();
//

/* A String can be words, sentences, or a bunch of characters.
To make a string, you can use double quotes ",
single quotes ' or backticks ` 
it does not matter which of these 3 symbols
you use to create a string, but you cannot mix the symbols,
like "xxx'.
You must terminate the string with the same symbol you started it with: "xxx"
*/

const hello = "i have 500 bucks"
let a123 = "hello"
a123 = hello;
console.log(hello); // "i have 500 bucks"
console.log(a123); // "i have 500 bucks"

/* For now, Me only need to know one operator or strings,
which is +, used to join strings together.
For example, 'End' + 'Game' results in 'End Game' */

const a = "hello" // hello
const message1 = a + 'world'  // helloworld
const c = 5
const d = c + message1  // 5helloworld
const e = '<h1>' + a + '</h1>' // <h1>hello</h1>

// 내 코딩습관 : 지레짐작하기

const firstName = 'Tony'
const lastName = 'Stark'
const location = 'Paris'
const message2 = "Welcome to " + location + ', ' + firstName + ' ' + lastName + '!'
console.log(message2);
// Template Literals (Template Strings)
const message3 = `Welcome to ${location}, ${firstName} ${lastName}!`
console.log(message3);

const actor = "We"
const location2 = "farmers' market"
const story = `${actor} plans to go to a ${location} tomorrow`
console.log(story);