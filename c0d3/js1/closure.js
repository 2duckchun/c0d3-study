const addLog = (msg, cb) => {
    return (a, b) => {
        console.log(msg, a, b);
        return cb(a, b)
    }
}

const isFirstBigger = addLog('두 숫자 비교', (a, b) => {
    return a > b
})

const b = isFirstBigger(5, 6)
console.log(b);