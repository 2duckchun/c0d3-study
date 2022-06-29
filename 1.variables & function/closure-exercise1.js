// Write a function named hello3x that returns a function
// The returned function should return 'hello' only the first 3 times
// it's run, them "".

const hello3x = () => {
    let count = 0
    return () => {
        if (count === 3) {
            return ''
        }
        count = count + 1
        return 'hello'
    } 
}

const threeF = hello3x()
let b = threeF() // b is "hello"
b = threeF() // b is "hello"
b = threeF() // b is "hello"
console.log(b);
b = threeF() // b is ""
console.log(b);
// b will always be "" for all subsequent b = threeF() executions.