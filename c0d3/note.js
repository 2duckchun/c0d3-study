// const request = require('request')
// const fs = require('fs')

// request('https://api.openaq.org/v1/countries', (err, res, data) => {
//     const dataArray = JSON.parse(data).results
//     const filter = dataArray.reduce((acc, e) => {
//       if (acc.cities < e.cities) return e
//       return acc
//     }, dataArray[0])
//     console.log(filter.name);
// })

