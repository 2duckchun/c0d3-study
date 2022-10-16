const request = require('request')

//callback-hell
request('https://a.com', (aErr, aRes, aData) => {
    request('https://b.com', (bErr, bRes, bData) => {
        request('https://c.com', (cErr, cRes, cData) => {
            request('https://d.com', (dErr, dRes, dData) => {
                request('https://e.com', (eErr, eRes, eData) => {
                    calculatedResult(aData, bData, cData, dData, eData)
                })
            })
        })
    })
})

//experienced engineer
const onReceiveResponseA = (aErr, aRes, aData) => {
    // do thing with aData
    request('https://b.com', onReceiveResponseB)
}

const onReceiveResponseB = (bErr, bRes, bData) => {
    request('https://c.com', onReceiveResponseC)
}

const onReceiveResponseC = (cErr, cRes, cData) => {
    request('https://d.com', onReceiveResponseD)
}

const onReceiveResponseD = (dErr, dRes, dData) => {
    request('https://e.com', onReceiveResponseE)
}

const onReceiveResponseE = (eErr, eRes, eData) => {
    calculatedResult(aData, bData, cData, dData, eData)
}

request('https://a.com', onReceiveResponseA)