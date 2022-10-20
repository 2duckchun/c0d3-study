/*

axios is a library that also sends requests, but unlike request, 
where you pass in a function as the second argument, 
axios returns a promise, 
and you pass the next function into the promise's then function.
axios는 request를 보내는 라이브러리이지만 request랑은 조금 다르다.
2번째 인자를 함수로 전달하면 axios는 프로미스를 반환하고 다음 함수를
다음 함수를 프로미스의 다음 함수로 전달한다.

This makes it easy to organize a chain of functions 
that depend on each other's results, 
listing them top-down instead of nesting them and creating callback hell.
이것은 함수의 체인을 통해 구성하기 쉽도록 해주며
탑-다운 방식으로 읽어서 편해진다.(콜백 지옥대신)

콜백함수를 두번째 인수로 전달하는 대신, 함수를 프로미스로 만들어준다.
*/

const axios = require('axios')
const allData = []
const resultOfDataPromise = axios('https://a.com')
    .then(aData => {
        allData.push(aData)
        return axios('https://b.com')
    })
    .then(bData => {
        allData.push(bData)
        return axios('https://c.com')
    }) 
    .then(cData => {
        allData.push(cData)
        return axios('https://d.com')
    })
    .then(dData => {
        allData.push(dData)
        return axios('https://e.com')
    })
    .then(eData => {
        allData.push(eData)
        return calculateResult(allData)
    })
    .catch(eErr => {
    })

/*
Another benefit is that a promise's .then function 
always returns another promise, 
allowing you to chain them. 
Continuing from the example above, you can chain from the computed result:
then의 장점은 계속 프로미스를 리턴한다는 것이다.
이것을 통해 chain 환경을 구성할 수 있으며,
위처럼 작용하여, 비동기 프로미스를 모두 계산한 결과값을 얻을 수 있다.
*/

const userNamesPromise = resultOfDataPromise.then(result => {
  // result is the return value from calling calculateResult(allData) above.
  // 여기의 result는 calulatedResult(allData)의 리턴 밸류가 될 것이다.
  return getUserNames(result)
})


// To use the final usernames result (i.e. to print it out)
userNamesPromise.then(userNames => {
  console.log(userNames)
})  