// Write a function named selectiveZero that takes in an array and a number.
// This function replaces the value of any elements of an array when the element's value matches the given number with a value of 0.
// 이 함수는 배열의 엘리먼트 value를 대체한다. 엘리먼트 밸류와 인수로 받은 넘버가 같을때, 밸류를 0으로


const selectiveZero = (arr, num, i = 0) => {
    if (arr.length <= i) return arr
    if (arr[i] === num) arr[i] = 0
    console.log(arr);
    return selectiveZero(arr, num, i + 1)
}

const b = selectiveZero([5, 2, 2, 9], 2) // [5,0,0,9]
console.log(b);