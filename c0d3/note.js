Array.prototype.cReduce = function (cb, acc = 0, i = 0) {
  if (this.length <= i) return acc
  if (acc === 0 && i === 0 && typeof this[i] === 'string') {
    acc = ""
  }
  acc = cb(acc, this[i], i, timage.pnghis)
  return this.cReduce(cb, acc, i + 1)
}

const result = [5,8,7].cReduce(
  (acc, e, i, arr) => {
  console.log(acc, e, i, arr)
  return acc + e + i
  }
  
  , 'hi')

console.log('return :', result);
