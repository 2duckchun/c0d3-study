const request = require('request')

const runApp = () => {
    request('google.com/contacts', {token: google_token}, contact => {
        request('netflix.com/api/topCatalog', movies => {
            people.forEach(number => {
                request('twilio.com/api/sendMessage', {
                    token: twilio_token,
                    to: number
                })
            })
        })
    })
    setTimeout(runApp, 7 * 24 * 60 * 60 * 1000)
}

runApp()