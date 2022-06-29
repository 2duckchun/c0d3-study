/*
Write a function named callWith that takes a number and
returns a function. The returned function takes in a function
as its parameter and invokes it with the number as argument
*/

const callWith = (num) => {
    return (f) => {
        return f(num)
    }
}

const fun = callWith(10)
let b = fun(num => {
    return num + 5
})

b = fun(num => {
    return num + 'hello'
})

b = fun(num => {
    return 500 % num
})