/*
Many times you may want to send more than one request at once. 
For example, if you want to look up the prices of 20 houses in your neighborhood (or the weights of 20 Pokemon), 
you want to send all the requests to get the data at once, then do something with all the data 
(such as finding the cheapest house or the heaviest Pokemon). 

많은 순간마다 너는 하나보다 많은 리퀘스트를 보내고 싶을 때가 있을 것이다.
예를들어, 네 이웃의 20개 정도의 집값을 보고 싶을때 (또는 포켓몬 무게 등)
너는 모든 리퀘스트를 한번에 보내고 싶을 것이다. 그리고 모은 데이터로 한번에 무언가를 하고 싶을 것이다.
(가장 싼 집을 찾던지, 가장 무거운 포켓몬을 찾던지.)

To do this, you can use Promise.all, which takes in an array of promise objects and returns a promise. 
When the then function runs, the argument function will get an array of responses.
이를 위해 우리는 promise.all을 사용할 수 있따. 이것은 프라미스 오브젝트의 배열을 인수로 받고, 프로미스를 리턴한다.
펑션을 실행했을 때, 인수로 받은 함수는 응답된 어레이를 받게 된다.
*/

const axios = require('axios')

const pokeNumbers = [
  37, // vulpix
  38, // ninetales
  39, // jigglypuff
  40 // wigglytuff
]

const arrayPromises = pokeNumbers.map(num => {
  return axios(`https://pokeapi.co/api/v2/pokemon/${num}`)
})

Promise.all(arrayPromises).then(results => {
  console.log(arrayPromises);
  results.forEach(e => {
    console.log(`${e.data.name} weighs ${e.data.weight}`)
  })
})