Array.prototype.fizzbuzz = function (i = 0) {
    if (i === this.length) {
      return this
    }
    if (this[i] % 5 === 0 && this[i] % 3 === 0) {
      this[i] = 'fizzbuzz'
    }
    if (this[i] % 3 === 0) {
      this[i] = 'fizz'
    }
    if (this[i] % 5 === 0) {
      this[i] = 'buzz'
    }
    return this.fizzbuzz(i + 1)
  }


  const arr = [9, 80, 12, 2, 30, 15]
arr.fizzbuzz()

console.log(arr);