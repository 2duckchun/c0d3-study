const nuts = ['almond', 'pistachio', 'hazelnut']
const seeds = nuts
nuts.unshift(seeds)

console.log(`nuts : `, nuts);
console.log(`seeds : `, seeds);

const states = ['Pennsylvania', 'New Jersey', 'Georgia']
const numStates = states.unshift('Delaware', 'New York')
console.log(numStates);