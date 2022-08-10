const fruits = ['banana', 'orange', 'apple', 'mango']
let removed = fruits.splice(2, 1, 'Lemon', 'Kiwi')
console.log(fruits)
console.log(removed)

const fruits2 = ['banana', 'orange', 'apple', 'mango']
removed = fruits2.splice(2, 2) // ['banana', 'orange']
console.log(fruits2) // ['banana', 'orange']
console.log(removed) // ['apple', 'mango']

removed = fruits2.splice(0, 1, 'apple', 'mango', 'pear')
// fruits2 = ['apple', 'mango', 'pear', 'orange']
// removed = ['banana']

removed = fruits2.splice(-2, 1)
// fruits2 = ['apple', 'mango', 'orange']
// removed = ['pear']

removed = fruits2.splice(1)
// fruits2 = ['apple']
// removed = ['mango', 'orange']