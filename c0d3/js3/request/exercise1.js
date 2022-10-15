const request = require('request')

request('https://www.c0d3.com/api/lessons', (err, res, data) => {
    const dataString = JSON.parse(data)
    dataString.forEach((e) => {
        console.log(e.title);
    })
})