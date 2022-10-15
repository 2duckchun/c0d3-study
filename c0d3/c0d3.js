// solution.js
const request = require('request')

module.exports = {
  printLessons: () => {
    request('https://c0d3.com/api/lessons', (err, res, body) => {
  const parsedJson = JSON.parse(body)
  parsedJson.forEach(thisLesson => {
    console.log(thisLesson.title)
  })
})
  }
}