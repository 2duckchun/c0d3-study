const request = require('request')
const fs = require('fs')


module.exports = {
  printLessons: () => {
    request('https://c0d3.com/api/lessons', (err, res, body) => {
      const parsedJson = JSON.parse(body)
      parsedJson.forEach(thisLesson => {
      console.log(thisLesson.title)
      })
    })
  },

  createTitlesDoc: () => {
    request('https://www.c0d3.com/api/lessons', (err, res, data) => {
    const dataArray = JSON.parse(data)
    const inputHtml = dataArray.reduce((acc, e) => {
        acc = acc + `<h1>${e.title}</h1>`
        return acc
    }, '')
    fs.writeFile('lessons.html', inputHtml, () => {})
    })
  },

  getNames: () => {
    request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
      const dataArray = JSON.parse(data).results
      console.log(dataArray);
      const inputHtml = dataArray.reduce((acc, e) => {
          acc = acc + `<h1>${e.name}</h1>`
          return acc
      }, '')
      console.log(inputHtml);
      fs.writeFile('names.html', inputHtml, () => {})
  })
  },

  getMostCities: () => {
    request('https://api.openaq.org/v1/countries', (err, res, data) => {
      const dataArray = JSON.parse(data).results
      const filter = dataArray.reduce((acc, e) => {
        if (acc.cities < e.cities) return e
        return acc
      }, dataArray[0])
      console.log(filter.name);
  })
  }
}
