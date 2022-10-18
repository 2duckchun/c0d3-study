const request = require('request')


// require가 필요한 이유 : 라이브러리 (라이브러리란? 어떠한 작업을 좀 쉽게 만들어줄 수 있는 남들이 만들어준 툴)
// request라는 라이브러리를 이 JS 




request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
    const parsedJson = JSON.parse(data)
    const pokemonList = []
    parsedJson.results.forEach((e) => {
        const name = e.name
        request(e.url, (err, res, data) => {
            const parsedPokemon = JSON.parse(data)
            const weight = parsedPokemon.weight
            pokemonList.push({name: name, weight: weight})

        })
    })
})



// request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
//     const parsedJson = JSON.parse(data)
//     const pokemonList = []
//     parsedJson.results.forEach((thisPokemon) => {
//         const name = thisPokemon.name
//         request(thisPokemon.url, (err, res, data) => {
//             const parsedPokemon = JSON.parse(data)
//             const weight = parsedPokemon.weight
//             pokemonList.push({name: name, weight: weight})
//             if (parsedJson.results.length === pokemonList.length) {
//                 const heaviest = pokemonList.reduce((acc, e) => {
//                     if (acc.weight < e.weight) return e
//                     return acc
//                 }, pokemonList[0])
//                 console.log(heaviest);
//             }
//         })
//     })
// })

