/*
Another way to create a function object is to use an arrow function
and its definition includes the arrow symbol =>.
Notice the keyword function is missing.
This is the prefered method today to create function objects.
There are differences between function and () => {}
and that difference will be covered in JS4.
*/

// const { application } = require('express')

// // ** syntax: ** ...
// const name = (parameter1, parameter2, parameter3) => {
//     //statements
// }

// // To write an arrow function and store it into a
// // variable called makeBasket, code this...

// // const makeBasket = () => {
// //     const b = 500;
// //     return b
// // }

// // return is a keyword to stop the function and
// // give a result.

// const fn = (a, b) => {
//     let c = a + b
//     if (c > 2) {
//         c = 0
//     }
//     return c + 1
// }
// const result = fn(22, 1)
// console.log(result);
// // The above a function is the preferred method
// // to create function objects.

// // let solution = () => {
// //     return () => {}
// // }

// // let b = solution()
// // console.log(b);

// // Running a Function
// /*
// You can tell the computer to carry out the instructions in a function
// by simply adding () to the name of the function.
// For example, makeBasket() runs the makeBasket function
// in the example above.

// Running a function has many synonyms.
// You might hear "running a function," "executing a function,"
// or "calling a function."
// */

// const makeBasket = () => {
//     return 500
// }
// const snitch = makeBasket
// const batter = makeBasket
// const result1 = makeBasket()
// const result2 = snitch()
// const result3 = batter()

// /*Important
// By storing the returned value of running the function,
// we can now use the result1, result2, result3
// variables at a later time. */

// alert()
// app.get()
// // you can make up any functions you want.
// // Assume someone made up app.get function
// // all you have to do is put () behind the function to run it.
// console.log()
// Object.keys()

// const keeper = () => {
//     return 5
// }
// let snitch1 = keeper // function Object
// snitch1 = !keeper // false, functions are truthy, so !truthy is false
// snitch1 = !keeper() // false, we run the function and get 5; !5 is false

/* You must step through each line like a computer
Keep in mind that values of variables change constantly.
*/

// let people = '';
// const igor = () => {
//     people = people + ' muggle '
//     return people
// }

// const solution = () => {
//     igor()
//     igor()
//     igor()
// }

// const luna = solution()
// luna is just executed of solution
// people is ' muggle muggle muggle '

// const solution = () => {
//     return () => {}
// }

// let people = ''
// const igor = () => {
//     return () => {
//         people = people + ' muggle '
//         return people
//     }
// }
// const luna = igor()
// let lovegood = luna()
// lovegood = luna()

const solution = () => {
    return () => {
        console.log('pick me up')
        console.log('pick me up')
        console.log('pick me up')
    }
}

const luna = solution()
console.log(luna);
const lovegood = luna()