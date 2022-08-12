const ages = [22, 28, 80, 48, 32]
const add5InPlace = (elem, idx, arr) => {
    arr[idx] = arr[idx] + 5
}
ages.forEach(add5InPlace)
console.log(ages);



const arr = []

const solution = data => {
    arr.push(data)
}

const arr2 = [1, 2, 3, 4]

arr2.forEach(() => {
    arr.push(arr2)
})

arr2[2] = 'three'
arr2[3] = 'four'

console.log(arr2);