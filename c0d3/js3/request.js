/*
리퀘스트를 보내기위한 많은 라이브러리들이 있고, 리퀘스트 라이브러리 또한 그들 중 하나이다.
우리는 request라이브러리를  리퀘스트를 보내기위해 사용할 수 있으며, 브라우저처럼 웹페이지를 리트리브 할 수도 있다.
아래 코드를 작성하기 위해서는  npm을 다운로드 받아야 한다.
*/

const request = require('request')
// we are sending a request to a pokemon API to get pokemon data.
// this one actuaally works!

request(
    'https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20',
    (err, res, data) => {
        console.log(data)
        const pokeInfo = JSON.parse(data)
        console.log(pokeInfo.results)
    }
)