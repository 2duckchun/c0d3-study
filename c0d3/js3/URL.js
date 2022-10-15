const request = require('request')
request('https://news.ycombinator.com', (err, res, data) => {
    console.log(data)
})