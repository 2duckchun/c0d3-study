// const peppers = [5, 6, 6].map((e, i) => {
//   setTimeout(() => {
//     console.log(e)
//     return 100
//   }, 1000)
// }) // what is peppers?

// console.log(peppers)


const friends = ['Tony Stark', 'Vision', 'Ultron'].reduce((a, b) => {
  setTimeout(() => {
    console.log('Greetings,', b)
  }, 2000)
  return a + b
}, '')

console.log(friends);