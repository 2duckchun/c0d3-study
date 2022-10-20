/*
Modify your solution to exercise 3 from the previous section to use axios or node-fetch: 
Send a request to https://pokeapi.co/api/v2/pokemon/ and write all the names into a file called names.
html with the following content:
*/

const axios = require('axios')
const fs = require('fs')

axios('https://pokeapi.co/api/v2/pokemon/')
    .then((data) => {
        return data.data.results})
    .then((data) => {
        const parseData = data.reduce((acc, e) => {
            acc = acc + `<h1>${e.name}</h1>`
            return acc
        }, '')
        fs.writeFile('./name.html', parseData, () => {
        console.log('후후후')
    })
})