const array = [1, 2, 3];

console.log(Symbol.iterator in array); // true
for (const item of array) {
  console.log(item);
}

console.log([...array]);
