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


allFuns.delayAndCall = delayAndCall
allFuns.reverso = reverso
allFuns.removeCharX = removeCharX
module.exports = allFuns