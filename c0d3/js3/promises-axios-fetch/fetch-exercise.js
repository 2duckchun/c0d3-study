const fetch = require('node-fetch')

const allData = []

const resultOfDataPromise = fetch('https://a.com').then((r) => {
    return r.json()
}).then((aData) => {
    allData.push(aData)
    return fetch('https://b.com')
}).then((bData) => {
    return bData.json()
}).then((bData) => {
    allData.push(bData)
    return fetch('https://c.com')
}).then((cData) => {
    return cData.json()
}).then((dData) => {
    allData.push(dData)
    return calculateResult(allData)
})