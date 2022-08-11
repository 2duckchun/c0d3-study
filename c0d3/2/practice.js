const copyLast = (arr, num, result = [], i = num) => {
    if (arr.length === i) return result
    result.push(arr[i])
    return copyLast(arr, num, result, i + 1)
}

const arr = [1, 2, 3, 4 ,5]
const a = copyLast(arr, 2)

console.log(arr);
console.log(a);