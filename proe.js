const a = ["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"]

// function solution(quiz) {
//     let result = []
//     quiz.forEach((e) => {
//         let arr = e.split(' = ')
//         let left = arr[0].split(' ')
//         if (left[1] === '+') {
//             if (+left[0] + +left[2] === +arr[1]) {
//                 return result.push("O")
//             } else {
//                 return result.push("X")
//             }
//         }
//         if (left[1] === '-') {
//             if (+left[0] - +left[2] === +arr[1]) {
//                 return result.push("O")
//             } else {
//                 return result.push("X")
//             }
//         }
//     })
//     return result
// }

function solution(quiz) {
    const results = []
    for(let i = 0; i < quiz.length; i++) {
        const port = quiz[i].split(' = ')
        const leftPort = port[0].split(' ')
        const num1 = +leftPort[0]
        const num2 = +leftPort[2]
        const operator = leftPort[1]
        let result = 0;
        if(operator === "+") { // 5 + 3 = 7
            result = num1 + num2
            if (result === +port[1]) {
              results.push("O")
            } else {
                results.push("X")
            }
        }
        if(operator === "-") {
            result = num1 - num2
            if (result === +port[1]) {
             results.push("O")
            } else {
                results.push("X")
            }
        }
        // result === +port[1] ? results.push("O") : results.push("X")
    }
    return results
}

console.log(solution(a));
