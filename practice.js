// const solution = () => {
    Array.prototype.cReduce = function (cb, start = null, i = 0, acc = 0) {
      if (this.length <= i) return acc
      if (i === 0) {
        acc = start
      }
      if (start === null) {
        if (typeof this[i] === 'string') {
          start = "Not use"
          acc = ""
        }
      }

      acc = cb(acc, this[i], i, this)
      return this.cReduce(cb, start, i + 1, acc)
    }
//   }

const result = [1,2,3].cReduce( (acc, e, i, arr) => {
  console.log(acc, e, i, arr)
  return acc + e
})

console.log(result);