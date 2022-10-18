const request = require('request')
const fs = require('fs')

/*

Send a request to https://pokeapi.co/api/v2/pokemon/ and console.log the Pokemon 
that weighs the most out of the first 20 Pokemon (if you don't give it a limit, the Pokemon API will default to 20 Pokemon). 
포켓몬 api에 요청을 보내고, 포켓몬의 몸무게를 찍어라. 

Look at the response—you will notice that each Pokemon has a URL. 
You need to send another request for each Pokemon to get its weight.

*/
request('https://pokeapi.co/api/v2/pokemon?limit=100', (err, res, body) => {
  const parsedJson = JSON.parse(body)
  const pokemonList = []
  parsedJson.results.forEach(thisPokemon => {
    const pokemonName = thisPokemon.name
    request(thisPokemon.url, (err, pokeRes, pokeBody) => {
      const data = JSON.parse(pokeBody)
      pokemonList.push({
        name: pokemonName,
        pic: data.sprites.front_default
      })
      if (pokemonList.length === parsedJson.results.length) {
        const htmlStr = pokemonList.reduce((acc, f) => {
          return `${acc}<div><p>${f.name}</p><img src="${f.pic}"/></div>`
        }, '')
        fs.writeFile('namesandimages.html', htmlStr, () => {
          ;``
        })
      }
    })
  })
})
