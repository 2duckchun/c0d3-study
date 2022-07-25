// Write a function named runIt that takes in a function as a parameter
// and returns the function.

const runIt = (f) => {
    return (a, b) => {
        return f(a, b)
    }

}


const subtrack = runIt((a, b) => {
    return a - b
})

let b = subtrack(3, 20)
b = subtrack(11, 2)