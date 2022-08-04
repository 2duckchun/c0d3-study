const isPrime = (num, i = 2) => {
    if (num < i) return false
    if (num === i) return true
    if (num % i === 0) return false
    return isPrime(num, i + 1)
}

const getNextPrime = (start) => {
    if (isPrime(start)) {
        return start
    }
    return getNextPrime(start + 1)
}

const primeMachine = start => {
    if (start < 2) {
        start = 1
    }
    if (isPrime(start)) {
        start = start + 1
    }
    return () => {
    const result = getNextPrime(start)
    start = result + 1
    return result
    }
}

const getPrime = primeMachine(2)

console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());