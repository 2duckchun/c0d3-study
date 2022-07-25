// Write a function named helloFunction that returns a function

const helloFunction = () => {
    let box = ""
    return () => {
        box = box + 'hello'
        return box
    }
}

const moreHello = helloFunction()
let b = moreHello() // hello
b = moreHello() // hellohello
b = moreHello() // hellohellohello
b = moreHello() // hellohellohellohello
console.log(b);
// every time moreHello is called, one more "hello" will be appended to variable b.