const request = require('request')
const fs = require('fs')

module.exports = {
    printLessons: () => {
        request('https://c0d3.com/api/lessons', (err, res, data) => {
        const parseData = JSON.parse(data)
        parseData.forEach(e => {
        console.log(e.title);
        })
    })
  }, 
    createTitlesDoc: () => {
        request('https://www.c0d3.com/api/lessons', (err, res, data) => {
          const parseData = JSON.parse(data)
          const titleArray = parseData.reduce((acc, titleObj) => {
              acc = acc + `<h1>${titleObj.title}</h1>`
              return acc
          }, '')
        fs.writeFile('./lessons.html', titleArray, () => {
            console.log('파일 작성 완료');
            /*
            Asynchronous behavior makes it tricky to split your code into functions, 
            비동기적 행위는 내 코드를 함수단위로 나누는 것을 곤란하게 한다.
            say by getting the lesson titles in one function and writing them into a file in another,
            lesson 타이틀을 한 함수에서 받아오고, 다른 함수에서 file을 작성하는 것과 같은 것을 말이다.
            because the request doesn't return its results. As you get better with promises, 
            왜냐하면 request는 그것의 결과를 리턴하지 않는다. 프로미스를 배우면 더 낫게 하게될 수 있지만
            you'll learn how to easily split these tasks up, 
            but for now you can plan on putting everything that depends on the results inside the request.
            지금은 request안에 모든걸 다 때려박는 것을 생각해봐라.
            */
        })
    })
  },
    getNames: () => {
      request('https://pokeapi.co/api/v2/pokemon/', (err, res, data) => {
        const parseData = JSON.parse(data).results
        const pokemonName = parseData.reduce((acc, pokemon) => {
            acc = acc + `<h1>${pokemon.name}</h1>`
            return acc
        }, '')
        fs.writeFile('./names.html', pokemonName, () => {
            console.log('포켓몬 이름 html 작성 완료');
        })
    })
  },

  getMostCities: () => {
    request('https://api.openaq.org/v1/countries', (err, res, data) => {
      const parseData = JSON.parse(data).results
      const bigCountry = parseData.reduce((acc, country) => {
          if (acc.cities < country.cities) {
              return {name: country.name, cities: country.cities}
          }
          return acc
      }, parseData[0])
      console.log(bigCountry.name);
    })
  },
  getHeaviest: () => {
    /*
    That was a long function, wasn't it? In the next section, you'll see how to make multiple request calls much cleaner and easier to read. 
    For now, let's look at how we went about coding this:
    이건 지금 골떄리는 함수이다. 다음 섹션에서 좀 더 쉬운 리퀘스트 콜링을 보여줄 것이다.
    지금은 어떻게 코딩이 맛이 가는지를 확인해봐라.

    Examples: The function should only do one thing—examine 20 Pokemon and find the heaviest, then console.log it.
    지금 펑션은 오직 20개의 포켓몬의 무게만 확인하고 콘솔을 찍어낸다.

    Function shape: We know the main function will be a request. 
    함수 모양은, 메인 펑션은 리퀘스트가 된다.
    
    We'll send 20 additional requests to find the weight of each Pokemon, 
    but because they'll need the URLs returned by the first request, 
    they'll have to be inside the first request's callback function.
    우리는 20개의 추가 요청을 보낼 것이다. (포켓몬 각각의 무게를 알아내기 위해)
    첫번째 리퀘스트에서 URL을 리턴받았기 때문이다.
    그것때문에 우리는 안쪽에서 또 URL을 리퀘스트 해야한다.

    Only after all 20 weights have been found can we use something like reduce to compare them and find the heaviest. 
    That's tricky because we don't know in which order they'll come back! So each of the 20 callback functions will have to check if it's the last, 
    and if so, complete the program by comparing the Pokemon and logging the heaviest.
    오직 20개의 무게를 다 확인한 후에야 우리는 리듀스를 통해 가장 무거운 녀석들을 비교할 수 있다. 굉장히 까다롭다.
    그래서 20개의 콜백기능 각각이 마지막인지 확인해야하고, 만약 그렇다면 그때서야 가장 무거운 녀석을 비교할 수 있을 것이다.

    Think: We'll need to start an array to keep track of the names and weights once they've been found outside the forEach so that each request can add to it. 
    우리는 시작할 수 있다 어레이를 바깥 트랙에 놓고 이름과 무게를 받아놓는 녀석을 만들기. 
    Once this array has 20 elements (the same number as the original results list) we're ready to compare them, which we'll do with reduce.
    배열이 20개가 꽉 찬다면, 우리는 그때야 비교를 할 수 있을 것이다.
    

    */
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
  }
}



