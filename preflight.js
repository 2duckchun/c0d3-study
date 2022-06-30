const allFuns = {}

const removeCharX = (str, idx, i = 0, result = '') => {
    if (i === str.length) {
      return result
    }
    if (i !== idx) {
      result = result + str[i]
    }
    return removeCharX(str, idx, i + 1, result)
  }

allFuns.removeCharX = removeCharX
module.exports = allFuns