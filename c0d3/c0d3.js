const allFuns = {}

Object.prototype.longestString = (obj) => {
  return Object.values(obj).reduce((acc, e) => {
    if (acc.length < e.length) return e
    return acc
  }
  , "")
}


Object.prototype.keyOfLongestString = (obj) => {
  const keyArray = Object.keys(obj)
  return keyArray.reduce((acc, e) => {
    if (obj[acc].length < obj[e].length) return e
    return acc
  }, keyArray[0])
}

Object.prototype.removeLongestString = (obj) => {
  const a = keyOfLongestString(obj)
  delete obj[a]
  return obj
}

Object.prototype.commas = (obj) => {
  const b = Object.values(obj)
  return b.reduce((acc, e, i) => {
    let comma = ', '
    if (i === 0) comma = ''
    return acc + comma + e
  }, '')
}

allFuns.commas = commas
allFuns.removeLongestString = removeLongestString
allFuns.keyOfLongestString = keyOfLongestString
allFuns.longestString = longestString

console.log(allFuns)
module.exports = allFuns