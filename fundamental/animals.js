const animals = [
    { name : 'lion', size: 'big', isAggresive: true, weight : 200},
    { name : 'monkey', size: 'medium', isAggresive: true, weight : 30},
    { name : 'cat', size: 'small', isAggresive: false, weight : 10},
    { name : 'rat', size: 'small', isAggresive: false, weight : 2},    
]

// for (let i = 0; i < animals.length; i++ ) {
//     console.log(animals[i]);
// }

// for (let animal of animals) {
//     console.log(animal);
// }

// let i = 0
// while(i < animals.length) {
//     console.log(animals[i]);
//     i++
// }

//for each, map, reduce

// animals.forEach(function(animal, index) {
//     console.log(animal.name, index);
// })

// animalsNames = animals.map((animal) => {
//     return `name is ${animal.name} and size is ${animal.size}`
// })
// console.log(animalsNames);

// const smallAnimals = animals.filter((item) => {
//     return item.size === 'small';
// })
// console.log(smallAnimals);

const numbers = [1, 10, 11, 23, 444];
const total = numbers.reduce((acc, cur) => {
    console.log(acc, cur);
    return acc+cur;
});
console.log(total)