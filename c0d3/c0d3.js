const allFuns = {}

const oddToZero = (arr) => {
    return arr.map((ele) => {
      if (ele % 2) return 0
      return ele
    })
}

const firstLetters = (arr) => {
    return arr.map((e) => {
      return e[0]
    })
}

const firstXToZero = (arr, num) => {
    return arr.map((e, i) => {
      if (i < num) return 0
      return e 
    })
}

const append = (arr, str) => {
    return arr.map((e) => {
      return e + str
    })
}

const runOnEach = (arr, cb) => {
    return arr.map((e) => {
      return cb(e)
    })
}

const noMoreEvens = (arr) => {
  return arr.filter((e) => {
    return (e % 2)
  })
}

const removeEmpty = (arr) => {
  return arr.filter((e) => {
    if (e !== '') return e
  })
}

const isPrime = (num, i = 2) => {
  if (num < 2) return false
  if (num <= i) return true
  if (!(num % i)) return false
  return isPrime(num, i + 1)
}

const primesOnly = (arr) => {
  return arr.filter((e) => {
    return isPrime(e)
  }) 
}

const firstPrime = (arr) => {
  return arr.find((e) => {
    return isPrime(e)
  })
}

const sum = (arr) => {
  return arr.reduce((acc, e, i) => {
    return acc + e
  }, 0)
}

const largest = (arr) => {
  return arr.reduce((acc, e) => {
    if (acc < e) return e
    return acc
  }, arr[0])
}

const longest = (arr) => {
  return arr.reduce((acc, e) => {
    if (acc.length < e.length) return e
    return acc
  }, arr[0])
}

allFuns.longest = longest
allFuns.largest = largest
allFuns.sum = sum
allFuns.firstPrime = firstPrime
allFuns.primesOnly = primesOnly
allFuns.isPrime = isPrime
allFuns.removeEmpty = removeEmpty
allFuns.noMoreEvens = noMoreEvens
allFuns.runOnEach = runOnEach
allFuns.append = append
allFuns.firstXToZero = firstXToZero
allFuns.firstLetters = firstLetters
allFuns.oddToZero = oddToZero
module.exports = allFuns