const farm = ['sheep', 'cow', 'pig']
const farm2 = farm.map((e) => {
    return e
})

// quicker way of cloning an array is to use [...arr].

// also combine arrays while cloning them
const farm3 = ['sheep', 'cow', 'pig']
const farm4 = ['horse', 'duck', 'llama']

const farm5 = [...farm3, ...farm4]
console.log(farm5);