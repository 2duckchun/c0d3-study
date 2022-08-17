Array.prototype.last = function() {
  return this[this.length - 1]
};

const a = [1, 2, 3].last()
const b = [4, 5, '마지막'].last()

console.log(a)
console.log(b)

Array.prototype.papaya = function (i = 0, z = 0) {
  if (i === this.length) return z
  return this.papaya(i + 1, this[i] + z)
}
console.clear()


const juicy = [7, 8, 2].papaya // juicy는 뭘까?
const juicy2 = [7, 8, 2].papaya() // juicy2는 뭘까?

console.log(juicy)
console.log(juicy2)

const c = [9, 8, 7]

Array.prototype.greet = function() {
  return this[0]
}

c.greet() // return 9

// Array.prototype.greet가 배열보다 아래 선언되어 있음에도 불구하고
// 전역에서 이 기능을 사용할 수 있게 된다.