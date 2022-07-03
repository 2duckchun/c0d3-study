const trees = ['pine', 4, 'apple', 6, false, () => {}] // Example of an array.
let res = trees[0] // trees[0] refers to the element at index 0 in array trees,
// and the value of that element (which is "pine") is assigned
// to the variable res.

trees[4] = trees[0] + trees[2] // 'pineapple'
trees[5] = trees[1] + trees[3] // '10'

res = trees.length // res is 6 (total 6 elements)