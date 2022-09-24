const allFuns = {}

const removeCharX = (str, num, i = 0, result ="") => {
    if (str.length <= i) return result
    if (num !== i) {
        result = result + str[i]
    }
    return removeCharX(str, num, i + 1, result)
}

const b = removeCharX("We're in the endgame now.", 1)

console.log(b);

allFuns.removeCharX = removeCharX
module.exports = allFuns