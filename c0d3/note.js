// Write a function called commas that returns a string of all of an object's values separated 
// by commas.

Object.prototype.commas = (obj) => {
  const b = Object.values(obj)
  return b.reduce((acc, e, i) => {
    let comma = ', '
    if (i === 0) comma = ''
    return acc + comma + e
  })
}

const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
const result = commas(info)
console.log(result);
// result is 'arrogant, native, strong'