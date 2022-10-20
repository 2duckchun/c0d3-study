const request = require('request')
const fs = require('fs')

/*
Send a request to https://pokeapi.co/api/v2/pokemon/ and then send a request to get information for each Pokemon to get its image (sprites.front_default). 
api에 리퀘스트를 보내라 , 그리고 인포메이션에 리퀘스트를 보내고(각 포켓몬) 그들의 이미지를 받아와라.

Create an HTML page with 100 Pokemons' names and images.
100개 포켓몬의 이미지를 만들어보아라.
*/

request('https://pokeapi.co/api/v2/pokemon?limit=100', (err, res, data) => {
    const parseData = JSON.parse(data).results
    const pokeList = []
    parseData.forEach((data) => {
      const pokeName = data.name
      request(data.url, (err, res, data) => {
        const pokebody = JSON.parse(data).sprites.front_default
        pokeList.push({name: pokeName, img: pokebody})
        if (pokeList.length === parseData.length) {
          const htmlStr = pokeList.reduce((acc, e, i) => {
            acc = acc + `<div><p>${e.name}</p><img src="${e.img}"></div>`
            return acc
          }, '')
          fs.writeFile('./pokemon.html', htmlStr, () => {
            console.log('다만들었다')
          })
        }
      })
    })
})

request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
      const parsePokemonData = JSON.parse(data).results
      const pokeArray = []
        parsePokemonData.reduce((acc, pokemon) => {
          request(pokemon.url, (err, res, data) => {
              const parseWeight = JSON.parse(data).weight
              pokeArray.push({name: pokemon.name, weight: parseWeight})
                if (parsePokemonData.length === pokeArray.length) {
                    const bigpokemon = pokeArray.reduce((acc, e) => {
                        if (acc.weight < e.weight) {
                          return e
                        }
                        return acc
                    }, pokeArray[0])
                console.log(`Heaviest Pokemon is ${bigpokemon.name} at ${bigpokemon.weight} pounds`);
              }
            })
          },
        {}
      )
    })