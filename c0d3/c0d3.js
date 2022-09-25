const allFuns = {}

const removeCharX = (str, num, i = 0, result ="") => {
    if (str.length <= i) return result
    if (num !== i) {
        result = result + str[i]
    }
    return removeCharX(str, num, i + 1, result)
}

const reverso = (str, i = 0, result = "") => {
    if (str.length === result.length) return result
    return reverso(str, i + 1, str[i] + result)
}

const delayAndCall = (a, func) => {
    return () => {
        setTimeout(func, a)
    }
}

const isPrime = (num, i = 2) => {
    if (num < 2) return false
    if (num === i) return true
    if (num % i === 0) return false
    return isPrime(num, i + 1)
}

const getNextPrime = (num) => {
    if (isPrime(num)) return num
    return getNextPrime(num + 1)
}

const primeMachine = (start) => {
    if (start < 2) {
        start = 1
    }
    if (isPrime(start)) {
        start = start + 1
    }
    return () => {
        let result = getNextPrime(start)
        start = result + 1
        return result
    }
}

allFuns.isPrime = isPrime
allFuns.getNextPrime = getNextPrime
allFuns.primeMachine = primeMachine
allFuns.delayAndCall = delayAndCall
allFuns.reverso = reverso
allFuns.removeCharX = removeCharX
module.exports = allFuns