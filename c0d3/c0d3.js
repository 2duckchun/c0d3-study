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

const largest = (arr, i = 0, current = arr[i] ) => {
    if (arr.length <= i) return current
    if (arr[i] < arr[i + 1]) {
        current = arr[i + 1]
    }
    return largest(arr, i + 1, current)
}

const firstXToZero = (arr, num, i = 0) => {
    if (arr.length <= i) return arr
    if (i < num) {
        arr[i] = 0
    }
    return firstXToZero(arr, num, i + 1)
}

const allPrime = (arr, i = 0) => {
    if (arr.length <= i) return true
    if (!(isPrime(arr[i]))) return false
    return allPrime(arr, i + 1)
}

const increasing = (arr, i = 1) => {
    if (arr.length <= i) return true
    if (arr[i - 1] >= arr[i]) return false
    return increasing(arr, i + 1) 
}

const copyArray = (arr, i = 0, result = []) => {
    if (arr.length === result.length) return result
    result.push(arr[i])
    return copyArray(arr, i + 1, result)
}

const removeElement = (arr, str, i = 0) => {
    if (arr.length <= i) return arr
    if (arr[i] === str) {
        arr.splice(i, 1)
        return removeElement(arr, str, i)
    }
    return removeElement(arr, str, i + 1)
}

const copyWithout = (arr, num, i = 0, result = []) => {
    if (arr.length <= i) return result
    if (arr[i] !== num) {
        result.push(arr[i])
    }
    return copyWithout(arr, num, i + 1, result)
}

const copyReverse = (arr, result = []) => {
    if (arr.length === result.length) return result
    result.unshift(arr[result.length])
    return copyReverse(arr, result)
}

const copyLast = (arr, num, i = 0, result = []) => {
    if (arr.length <= i) return result
    if (i >= num) {
        result.push(arr[i])
    }
    return copyLast(arr, num, i + 1, result)
}
// We've been asked to skip the first certain number of elements in the array, so one easy way to do it is to start at the beginning and check each time if we've reached the starting point yet. We could also have set i=b as the default parameter.

// The alternative solution without using the index variable i. The pushing starts from the value of number b, which is the number of elements to skip. Since index of array starts from 0, the index of the next element to push will be the same as the value of number b. The value of variable b will be incremented by 1 for the next element.

// const copyLast = (a, b, result = []) => {
//     if (b >= a.length) {
//       return result
//     }
//     result.push(a[b])
//     return copyLast(a, b + 1, result)
//   }
  


allFuns.copyLast = copyLast
allFuns.copyReverse = copyReverse
allFuns.copyWithout = copyWithout
allFuns.removeElement = removeElement
allFuns.copyArray = copyArray
allFuns.increasing = increasing
allFuns.allPrime = allPrime
allFuns.firstXToZero = firstXToZero
allFuns.largest = largest
allFuns.isPrime = isPrime
allFuns.getNextPrime = getNextPrime
allFuns.primeMachine = primeMachine
allFuns.delayAndCall = delayAndCall
allFuns.reverso = reverso
allFuns.removeCharX = removeCharX
module.exports = allFuns