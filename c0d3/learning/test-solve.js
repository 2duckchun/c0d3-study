const allFuns = {}

const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2]
}

const firstLongerThan = (arr, num) => {
    return arr.find((e) => {
        return e.length > num
    })
}

const getReturnValues = (arrfn) => {
    return arrfn.map((e) => {
        return e()
    })
}

const makeRow = (num, i = 0, row = []) => {
    if (num <= i) return row
    row.push(0)
    return makeRow(num, i + 1, row)
}

const zeroSquare = (num, i = 0, result = []) => {
    if (num <= i) return result
    result.push(makeRow(num))
    return zeroSquare(num, i + 1, result)
}

allFuns.zeroSquare = zeroSquare
allFuns.makeRow = makeRow
allFuns.getReturnValues = getReturnValues
allFuns.firstLongerThan = firstLongerThan
allFuns.mergeArrays = mergeArrays
module.exports = allFuns