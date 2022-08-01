// const solution = (a, b) => {
//     return (c) => {
//         return a + b + c
//     }
// }

// const fun1 = solution(1, 2)
// let res = fun1(3)

// res = fun1(5)

// res = solution(2 ,3)(9)

const solution = () => {
    counter = 0
    return () => {
        counter = counter + 1
        if (counter < 3) {
            return 0
        }
        return counter
    }
}
const arya = solution()
let res = arya()
const sansa = solution()
res = arya() + sansa()
res = arya() + sansa() 
res = arya() + sansa()
res = arya() + sansa()
res = arya() + sansa()
console.log(res);