const fs = require('fs')

const listFiles = () => {
    fs.readdir('./', (err, files) => {
        const htmlMessage = files.reduce((acc, e) => {
            acc = acc + `<h1>${e}</h2>`
            return acc
        }, '')
        fs.writeFile('./files.html', htmlMessage, () => {})
    })
}

listFiles()