/*
Modify your solution to exercise 2 from the previous section to use axios or node-fetch: 
Send a request to [https://www.c0d3.com/api/lessons](https://www.c0d3.com/api/lessons) 
and write all the titles into a file called lessons.html with the following content:

exercise 2를 axios로 변환하라.

*/

const axios = require('axios')
const fs = require('fs')

axios('https://www.c0d3.com/api/lessons')
    .then((data) => {
        return data.data
    })
    .then((parseData) => {
        const getTitle = parseData.reduce((acc, e) => {
            acc = acc + `<h1>${e.title}</h1>`
            return acc
        }, '')
        fs.writeFile('./title.html', getTitle, () => {
            console.log('작성우아아안료')
        })
    })