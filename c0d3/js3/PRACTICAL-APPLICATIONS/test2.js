const fs = require('fs')

const listFiles = () => {
    fs.readdir('./', (err, files) => {
        const filesArray = files.reduce((acc, e) => {
            acc = acc + `<h1>${e}</h1>`
            return acc
        }, '')
        fs.writeFile('./files.html', filesArray, () => {})
    })
}

listFiles()