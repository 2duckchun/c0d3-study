Array.prototype.cReduce = function (cb, start, i = 0, acc = "") {
  if (this.length <= i) return acc
  if (i === 0) {
    acc = start
  }
  acc = cb(acc, this[i], i, this)
  return this.cReduce(cb, start, i + 1, acc)
}

const num = 123
console.log(typeof num === 'number');

const result = [5,8,7].cReduce( (acc, e, i, arr) => {
  console.log(acc, e, i, arr)
  return acc + e + i
}, 'hi')

console.log(result);



// console.log will be called 3 times:
//    'hi', 5, 0, original array
//    'hi50', 8, 1, original array
//    'hi5081', 7, 2, original array
// result will be 'hi508172'