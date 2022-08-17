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


const isPrime = (num, i = 2) => {
    if (num < 2) return false
    if (num === i) return true
    if (num % i === 0) return false
    return isPrime(num, i + 1)
}

const nonPrimeToZero = (arr) => {
    return arr.map((e) => {
        if (isPrime(e)) {
            return e
        }
        return 0
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
    return arr.filter((e) => {
        if (isPrime(e)) {
            return e
        }
    })
}

const firstPrime = (arr) => {
    return arr.find((e) => {
        return (isPrime(e))
    })
}

const sum = (arr) => {
    return arr.reduce((acc, e) => {
        return acc + e
    }, 0)
}

const largest = (arr) => {
    return arr.reduce((acc, e) => {
        if (e > acc) {
            return e
        }
        return acc
    }, arr[0])
  }
  
const longest = (arr) => {
    return arr.reduce((acc, e) => {
        if (e.length > acc.length) {
            return e
        }
        return acc
    }, arr[0])
}

const matches = (arr, str) => {
    return arr.reduce((acc, e) => {
        if (e === str) {
            return acc + 1
        }
        return acc
    }, 0)
}

const combineLess5 = (arr) => {
    return arr.reduce((acc, e) => {
        if (e.length < 5) {
            return acc + e
        }
        return acc
    }, '')
}

const largerThan5 = (arr) => {
    return arr.reduce((acc, e) => {
        if (e > 5) {
            acc.push(e)
        }
        return acc
    }, [])
}

Array.prototype.getEvens = function(i = 0, result = []) {
    if (this.length === i) return result
    if (this[i] % 2 === 0) result.push(this[i])
    return this.getEvens(i + 1, result)
}

Array.prototype.sum = function() {
    if (this.length === 0) return undefined
    return this.reduce((acc, e) => {
        return acc + e
    })
}

Array.prototype.pad = function(num, pad, i = 0) {
    if (num <= i) return this
    this.push(pad)
    return this.pad(num, pad, i + 1)
}

Array.prototype.fizzbuzz = function() {
    this.forEach((e, i, arr) => {
        if (e % 3 === 0) arr[i] = 'fizz'
        if (e % 5 === 0) arr[i] = 'buzz'
        if (e % 3 === 0 && e % 5 === 0) arr[i] = 'fizzbuzz'
    })
}

Array.prototype.removeEvens = function(i = 0) {
    if (this.length === i) return this
    if (this[i] % 2 === 0) {
        this.splice(i, 1)
        return this.removeEvens(i)
    }
    return this.removeEvens(i + 1)
}

Array.prototype.getIterator = function() {
    let count = 0
    return () => {
        if (this.length === count) {
            count = 0
        }
        count = count + 1
        return this[count - 1]
    }
}

allFuns.pad = this.pad
allFuns.getIterator = this.getIterator
allFuns.removeEvens = this.removeEvens
allFuns.fizzbuzz = this.fizzbuzz
allFuns.sum = this.sum
allFuns.getEvens = this.getEvens
allFuns.largerThan5 = largerThan5
allFuns.combineLess5 = combineLess5
allFuns.matches = matches
allFuns.longest = longest
allFuns.largest = largest
allFuns.sum = sum
allFuns.firstPrime = firstPrime
allFuns.primesOnly = primesOnly
allFuns.removeEmpty = removeEmpty
allFuns.noMoreEvens = noMoreEvens
allFuns.clone = clone
allFuns.runOnEach = runOnEach
allFuns.append = append
allFuns.isPrime = isPrime
allFuns.nonPrimeToZero = nonPrimeToZero
allFuns.firstXToZero = firstXToZero
allFuns.firstLetters = firstLetters
allFuns.oddToZero = oddToZero
module.exports = allFuns