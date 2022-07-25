/*
Write a function named tryNumRange that takes in a number
and a function and calls the function with every number from
1 to the input number.
if any of these return true, return true;
if they all return false, return false.
*/


/*

일단 숫자와 함수를 받긴한다.
카운트를 1부터 num까지 올린다.


*/

const tryNumRange = (num, func, count = 1) => {
    if (num < count) {
      return false
    }
    if (func(count)) {
      return true
    }
    return tryNumRange(num, func, count = count + 1)
}

let res = tryNumRange(15, e => {
    return e > 10
  }) // res is true, because the input function returns
  // true when it is called with 11
console.log(res);

res = tryNumRange(8, e => {
  return e === 19
}) // res is false, because passing 1-8 into
// the input function will never return true
console.log(res);