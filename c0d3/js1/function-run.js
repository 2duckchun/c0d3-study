// Run the includes function, which takes in 1 argument, a string
// includes('string')

// Run the map function, which takes in 1 argument, a function
map(() => {})

// Run the setTimeout function, which takes in 2 arguments, a function and a number
setTimeout(() => {}, 500)

// Run the app.get function, which takes in 2 arguments, a string and a function
app.get('string', () => {})

// Run the fs.writeFile function, which takes in 3 arguments, a string, a string, and a function.
fs.writeFile('string', 'string', () => {})


const lannister = input => {
    return input
}
const stark = () => {
    return 99
}
let res1 = stark // res1 is function (stark)
res1 = lannister(stark) // res1 is function (stark)
res1 = lannister(stark()) // res1 is 99


const baratheon = run_me => {
    return run_me() + 5
}
const tyrell = () => {
    return 10
}
let res2 = tyrell // res2 is function (tyrell)
res2 = baratheon(tyrell) // res2 is 15
res2 = baratheon(() => {
    return 92
}, 3) // res2 is 97
res2 = baratheon(() => {
    const b = 95
    tyrell()
}) // NaN

// 너무 배움에 치중하다보면 코드를 한줄 한줄 읽는 것에 대해 준비가 되지 않는다.