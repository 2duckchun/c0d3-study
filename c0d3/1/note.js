const lessThan = (a) => {
    return (b) => {
        return (a > b)
    }
}

const youngerThanCardiB = lessThan(27)
let miley = youngerThanCardiB(26)
let nicki = youngerThanCardiB(36)
const smallerThan = lessThan(2)
let b = smallerThan(3)
b = smallerThan(5) || youngerThanCardiB(5)