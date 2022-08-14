Array.prototype.papaya = function(i = 0, z = 0) {
  if (i === this.length) return z
  return this.papaya(i + 1, this[i] + z)
}

const juicy = [7, 8, 2].papaya
const juicy2 = [7, 8, 2].papaya()

const a = [9, 8, 7]

Array.prototype.greet = function() {
  return this[0]
}

const b = a.greet()
console.log(b)