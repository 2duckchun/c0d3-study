const fibonacci = function(max) {
  let [pre, cur] = [0, 1];
  return {
    [Symbol.iterator] () {
      return {
        next() {
          [pre, cur] = [cur, pre + cur];
          return {
            value : cur, done : max <= cur
          }
        }
      }
    }
  }
}

for (let num of fibonacci(30)) {
  console.log(num);
}