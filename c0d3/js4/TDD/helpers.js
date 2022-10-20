const allFuns = {}

allFuns.sumAll = (arr) => {
    if (arr.length === 0) {
        return 0
    }
    return arr.reduce((acc, e) => {
        acc = acc + e
        return acc
    })
}

module.exports = allFuns