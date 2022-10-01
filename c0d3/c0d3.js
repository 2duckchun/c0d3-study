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

const matches = (arr, str) => {
  return arr.reduce((acc, e) => {
    if (e === str) return acc + 1
    return acc
  }, 0)
}

const combineLess5 = (arr) => {
  return arr.reduce((acc, e) => {
    if (e.length < 5) return acc + e
    return acc
  }, '')
}

const largerThan5 = (arr) => {
  return arr.reduce((acc, e) => {
    if (e > 5) acc.push(e)
    return acc
  }, [])
}

Array.prototype.getEvens = function () {
  return this.filter((e) => {
    return (e % 2 === 0)
  })
}


// Array.prototype.getEvens = function (i = 0, result = []) {
//   if (this.length <= i) return result
//   if (this[i] % 2 === 0) result.push(this[i])
//   return this.getEvens(i + 1, result)
// }

Array.prototype.sum = function() {
  if (this.length === 0) return undefined
  let startingValue = ''
  if (typeof this[0] === 'number') startingValue = 0
  return this.reduce((acc, e) => {
      return acc + e
  }, startingValue)
}
// 사실상 reduce를 창조하는 문제.
// 빈 배열을 받게 될 경우, undefined를 반환해야한다.
// 또한 스타트값을 잘 고려해봐야하는데
// 문자열 + 숫자는 문자열이 되는 것을 고려해서 코딩을 해야한다.
// startingvalue의 값을 미리 문자열로 선정을 해둔 뒤,
// 배열의 첫번째 값이 숫자일 경우, startingValue를 0으로 설정해준다.
// 이제 reduce 함수를 통해 배열 내부를 순환하면 된다.

Array.prototype.pad = function (num, str) {
  if(num <= 0) return this
  this.push(str)
  return this.pad(num - 1, str)
}

Array.prototype.fizzbuzz = function () {
  this.forEach((e, i, arr) => {
    if (e % 3 === 0 && e % 5 === 0) return arr[i] = 'fizzbuzz'
    if (e % 3 === 0) return arr[i] = 'fizz'
    if (e % 5 === 0) return arr[i] = 'buzz'
  })
}

Array.prototype.removeEvens = function(i = 0) {
  if (this.length <= i) return
  if (this[i] % 2 === 0) {
    this.splice(i, 1)
    return this.removeEvens(i)
  }
  return this.removeEvens(i + 1)
}

Array.prototype.getIterator = function() {
  let i = -1
  return () => {
    i = i + 1
    return this[i % this.length]
  }
}

// We need a local variable (let's say i) that starts at -1.
// 로컬 변수가 필요하다. (closure 환경을 만들기 위해)
// When the function is originally called, it returns another function
// 오리지날 펑션이 콜되면, 어나더 평션이 리콜됨.
// When the returned function is called,
// 리콜 펑션이 콜되면
// i is incremented by 1.
// i가 증가하고, 
// Continue going through the array this
// array (this)를 통해 계속 가능.

allFuns.getIterator = Array.prototype.getIterator
allFuns.removeEvens = Array.prototype.removeEvens
allFuns.fizzbuzz = Array.prototype.fizzbuzz
allFuns.pad = Array.prototype.pad
allFuns.sum = Array.prototype.sum
allFuns.getEvens = Array.prototype.getEvens
allFuns.largerThan5 = largerThan5
allFuns.combineLess5 = combineLess5
allFuns.matches = matches
allFuns.longest = longest
allFuns.largest = largest
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