const helper = (col, idx = 0, arr = []) => {
  if (col <= idx) return arr
  arr.push(0)
  return helper(col, idx + 1, arr)
}

const solution = (row, col, result = []) => {
  if (row <= result.length) return result
  result.push(helper(col))
  return solution(row, col, result)
}

const a = solution(3, 5)
console.log(a);

const b = helper(5)
console.log(b);