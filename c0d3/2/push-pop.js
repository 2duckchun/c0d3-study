const apples = ['Fuji', 'Gala']
const trees = apples.push('Pink Lady', 'Washington')
console.log(apples);
console.log(trees);

const peaches = [4, 8, 12]
const plums = peaches
peaches.push(plums)

peaches[3][1] = 39
console.log(peaches);

console.clear()

const states = ['Delaware', 'Missouri', 'Hawaii']
const lastState = states.pop()
console.log(states)
console.log(lastState)