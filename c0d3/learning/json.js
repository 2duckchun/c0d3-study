const arr = [-18, 'Peter Parker', true]
const strArr = JSON.stringify(arr)

const newArr = JSON.parse(strArr)

const isSame = arr === newArr

console.log(arr)
console.log(strArr);
console.log(newArr);
console.log(isSame);