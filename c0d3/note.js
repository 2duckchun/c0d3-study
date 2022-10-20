/*
Write a function that takes in an array of numbers and a number, and returns true if any pairs add up to the number. (The numbers in the array is not unique, meaning there may be duplicate numbers)
*/

const solution = (arr, num) => {
    let answer = false
    const map = new Map()
    arr.forEach((e) => {
        if (!map.has(num - e)) {
            map.set(e, true)
        } else answer = true
    })
    return answer
}




const b = solution([1,2,22,333,23], 8888)