const largest = (arr) => {
  return arr.reduce((acc, e, i, arr) => {
      if (e > arr[i + 1]) {
          return e
      }
      return acc
  }, arr[0])
}

const b = largest([])

console.log(b);

