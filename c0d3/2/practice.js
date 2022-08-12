const oddToZero = (arr) => {
  const result = arr.map((element) => {
      if (element % 2) {
          return 0
      }
      return element
  })
  return result
}
const b = oddToZero([1, 2, 3, 4, 5])
console.log(b);