const fs = require('fs')

// const abc = (i = 0) => {
//     if (10 < i) return
//     fs.writeFile(`./trainer${i}.txt`, `Gotta catch 'em all`, () => {})
//     return abc(i + 1)
// }

// abc()

const abc = (n, i = 0) => {
    if (i > n) return
    fs.writeFile(`./trainer${i}.txt`, `Gotta catch 'em all`, () => {})
    return abc(n, i + 1)
}

abc(10)