const allFuns = {}

const copyArray = (arr, newarr = []) => {
    if (arr.length === newarr.length) return newarr
    newarr.push(arr[newarr.length])
    return copyArray(arr, newarr)
}

const removeElement = (arr, str, i = 0) => {
    if (arr.length === i) return arr
    if (arr[i] === str) {
        arr.splice(i, 1)
        return removeElement(arr, str, i)
    }
    return removeElement(arr, str, i + 1)
}

const copyWithout = (arr, num, result = [], i = 0) => {
    if (arr.length === i) return result
    if (arr[i] !== num) {
        result.push(arr[i])
    }
    return copyWithout(arr, num, result, i + 1)
}

const copyReverse = (arr, result = [], i = 1) => {
    if (arr.length < i) return result
    result[i - 1] = arr[arr.length - i]
    return copyReverse(arr, result, i + 1)
}

const copyLast = (arr, num, result = [], i = num) => {
    if (arr.length <= i) {
        return result
    }
    result.push(arr[i])
    return copyLast(arr, num, result, i + 1)
}

const copyFirst = (arr, num, result = [], i = 0) => {
    if (arr.length - num <= i) {
        return result
    }
    result.push(arr[i])
    return copyFirst(arr, num, result, i + 1)
}

const runOnEach = (arr, f, result = [], i = 0) => {
    if (arr.length === i) return result
    result.push(f(arr[i], i))
    return runOnEach(arr, f, result, i + 1)
}

const onlyIndex = (arr, num, result = [], i = 0) => {
    if (arr.length <= i) return result
    if (num >= arr[0].length) return result
    result.push(arr[i][num])
    return onlyIndex(arr, num, result, i + 1)
}

allFuns.onlyIndex = onlyIndex
allFuns.runOnEach = runOnEach
allFuns.copyFirst = copyFirst
allFuns.copyLast = copyLast
allFuns.copyReverse = copyReverse
allFuns.copyWithout = copyWithout
allFuns.removeElement = removeElement
allFuns.copyArray = copyArray
module.exports = allFuns