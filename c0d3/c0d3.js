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

Object.prototype.forEach = function(cb, i = 0, ObjArr = Object.entries(this)) {
  if (ObjArr.length <= i) return
  cb(ObjArr[i][0], ObjArr[i][1], i)
  return this.forEach(cb, i + 1, ObjArr)
}

Object.prototype.filter = function(cb, i = 0, entries = Object.entries(this), result = {}) {
  if (entries.length <= i) return result
  if (cb(entries[i][0], entries[i][1])) {
    result[entries[i][0]] = entries[i][1]
  }
  return this.filter(cb, i + 1, entries, result)
}

Object.prototype.reduce = function(cb, acc, i = 0, key = Object.keys(this)) {
  if (key.length <= i) return acc
  if (acc === undefined) {
    acc = this[key]
  }
  acc = cb(acc, key[i], this[key[i]], i)
  return this.reduce(cb, acc, i + 1, key)
}

Array.prototype.getMostCommon = function() {
  const charCount = this.reduce((acc, e)=>{
    acc[e] = ((acc[e]) || 0) + 1
    return acc
  }, {})
  const mostCommon = Object.entries(charCount).reduce((acc, e) => {
    const key = e[0]
    const value = e[1]
    if (acc[1] < value) {
      if (parseInt(key)) return [parseInt(key), value]
      return e
    }
    return acc
  }, [null, 0])
  return mostCommon[0]
}

Array.prototype.removeDupes = function() {
  const charCount = this.reduce((acc, e)=>{
    acc[e] = ((acc[e]) || 0) + 1
    return acc
  }, {})
  const remove = (i = 0) => {
    if (this.length < i) return
    if (charCount[this[i]] === 1) return remove(i + 1)
    this.splice(i, 1)
    remove(i)
  }
}

Array.prototype.getNext = function() {
  this.index = (this.index || 0) + 1
  i = (this.index - 1) % this.length
  return this[i]
}


allFuns.removeDupes= Array.prototype.removeDupes
allFuns.getMostCommon = Array.prototype.getMostCommon
allFuns.reduce = Object.prototype.reduce
allFuns.filter = Object.prototype.filter
allFuns.forEach = Object.prototype.forEach
allFuns.commas = commas
allFuns.removeLongestString = removeLongestString
allFuns.keyOfLongestString = keyOfLongestString
allFuns.longestString = longestString

console.log(allFuns)
module.exports = allFuns