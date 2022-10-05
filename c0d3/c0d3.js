const allFuns = {}

const findLongest = (arr, i = 0, result = "") => {
  if (arr.length <= i) return result
  if (result.length <= arr[i].length) {
    result = arr[i]
  }
  return findLongest(arr, i + 1, result)
}

const longestString = (obj) => {
  const arr = Object.values(obj)
  return findLongest(arr) // (어레이 내부의 가장 긴 문자열을 return하는 함수)
}

const keyOfLongestString = (obj) => {
  const allKeys = Object.keys(obj)
  return allKeys.reduce((acc, e) => {
    if (obj[acc].length < obj[e].length) return e
    return acc
  }, allKeys[0])
}

allFuns.keyOfLongestString = keyOfLongestString
allFuns.findLongest = findLongest
allFuns.longestString = longestString
module.exports = allFuns