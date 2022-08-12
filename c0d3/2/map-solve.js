const allFuns = {}

const oddToZero = (arr) => {
    return arr.map((e) => {
        if (e % 2) {
            return 0
        }
        return e
    })
}

const firstLetters = (arr) => {
    return arr.map((e) => {
        return e[0]
    })
}

const firstXToZero = (arr, num) => {
    return arr.map((e, i) => {
        if (i < num) {
            return 0
        }
        return e
    })
}

const isNonPrime = (num, i = 2) => {
    if (num < 2) return true
    if (num === i) return false
    if (num % i === 0) return true
    return isNonPrime(num, i + 1)
}

const nonPrimeToZero = (arr) => {
    return arr.map((e) => {
        if (isNonPrime(e)) return 0
        if (!isNonPrime(e)) return e
    })
}

const append = (arr, str) => {
    return arr.map((e) => {
        return e + str
    })
}

const runOnEach = (arr, fn) => {
    return arr.map(fn)
}

const clone = (arr) => {
    return arr.map((e) => {
        return e
    })
}

const noMoreEvens = (arr) => {
    return arr.filter(e => {
        return (e % 2)
    })
}

const removeEmpty = (arr) => {
    return arr.filter(e => {
        return (e !== '') // return e.length
    })
}

const primesOnly = (arr) => {
    return arr.filter(e => {
        return (!isNonPrime(e))
    })
}

const firstPrime = (arr) => {
    return arr.find((e) => {
        return (!isNonPrime(e))
    })
}

allFuns.firstPrime = firstPrime
allFuns.primesOnly = primesOnly
allFuns.removeEmpty = removeEmpty
allFuns.noMoreEvens = noMoreEvens
allFuns.clone = clone
allFuns.runOnEach = runOnEach
allFuns.append = append
allFuns.isNonPrime = isNonPrime
allFuns.nonPrimeToZero = nonPrimeToZero
allFuns.firstXToZero = firstXToZero
allFuns.firstLetters = firstLetters
allFuns.oddToZero = oddToZero
module.exports = allFuns