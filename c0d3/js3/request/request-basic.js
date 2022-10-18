/* There are many libraries we can use to send a request, and the request library is one of them. 
많은 라이브러리들이 있다. 요청을 보내는 녀석들중에. 그리고 리퀘스트 라이브러리도 그 중 하나입니다.

You might have noticed it in the above examples. You can use this library to send requests to APIs and even to retrieve web pages like your browser does.
위에사 봤듯이, 너는 라이브러리를 API를 리퀘스트 보내는데 쓸 수 있고, 심지어 웹페이지에 받는 용도로도 쓸 수 있다.
*/

/*
To run the below code, you'll need to install request by running npm install request.
아래 코드를 동작시키기 위해, request를 깔아야한다. (npm i request)
*/

const request = require('request')

request('https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20', (err, res, data) => {
    console.log(data)
    const pokeInfo = JSON.parse(data)
    console.log(pokeInfo.results)
})

