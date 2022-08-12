const nuts = ['almond', 'pistachio', 'hazelnut']
const seeds = nuts
nuts.unshift(seeds)
console.log(nuts)
console.log(seeds)
// nut, seeds = [[array], 'almond', 'pistachio', 'hazelnut']

const states = ['pennsylvania',' New Jersey', 'Georgia']
const states2 = states.unshift('Delaware', 'New York')
console.log(states)
console.log(states2)
// state
// numState = ['Delaware', 'New York', 'Pennsylvania', 'New Jersey', 'Georgia']