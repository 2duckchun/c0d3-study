const apples = ['Fuji', 'Gala']
const trees = apples.push('Pink Lady', 'Washington')
// tree : ['Fuji', 'Gala', 'Pink Lady', 'Washington']
const peaches = [4, 8, 12]
const plums = peaches
peaches.push(plums) // plums의 참조 주소를 push한 것임.

// what is peaches? // [4, 8, 12, [4, 8, 12]]
// what is plums? // [4, 8, 12, [4, 8, 12]]

plums[0] = 47 /// [47, 8, 12, [47, 8, 12]]
peaches[3][1] = 39 // [47, 39, 12, [47, 39, 12]]

let nectarines = [1, 2, 3]
nectarines = nectarines.push(6)


const states = ['Delaware', 'Missouri', 'Hawaii']
const lastState = states.pop()

const nuts = ['almond', 'pistachio', 'hazelnut']
const seeds = nuts
const nutella = nuts.pop()

// nutella = 'hazelnut'
// nuts, seeds = ['almond', 'pistachio']
