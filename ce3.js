// Write a function named lessThan that returns a function:
const lessThan = (num1) => {
    return (num2) => {
        return num1 > num2
    }
}

const youngerThanCardiB = lessThan(27)
let miley = youngerThanCardiB(26) // true
console.log(miley);
let nicki = youngerThanCardiB(36) // false
console.log(nicki);

const smallerThan = lessThan(2)
let b = smallerThan(3) // false
console.log(b);
b = smallerThan(5) || youngerThanCardiB(5) // true
console.log(b);