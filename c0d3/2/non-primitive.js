const allFuns = {}

const selectiveZero = (arr, num, i = 0) => {
    if (arr.length === i) {
        return arr
    }
    if (arr[i] === num) {
        arr[i] = 0
    }
    return selectiveZero(arr, num, i + 1)
}

allFuns.selectiveZero = selectiveZero
module.exports = allFuns