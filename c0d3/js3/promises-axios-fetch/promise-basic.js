const request = require('request');

request('https://a.com', (aErr, aRes, aData) => {
    request('https://b.com', (bErr, bRes, bData) => {
        request('https://c.com', (cErr, cRes, cData) => {
            request('https://d.com', (dErr, dRes, dData) => {
                request('https://e.com', (eErr, eRes, eData) => {
                    calculateResult(aData, bData, cData, dData, eData)
                })
            })
        })
    })
}) // bad coding pattern

// 콜백지옥을 피할 수 있는 방법

const onReceiveResponseA = (aErr, aRes, aData) => {
    // do things with aData
    request('https://b.com', onReceiveResponseB)
}
// request의 2번째 인수가 콜백함수이므로, 콜백함수를 호출하는 것 처럼
// 코드를 짤 수 있다.

const onReceiveResponseB = (bErr, bRes, bData) => {
    // do things with aData
    request('https://c.com', onReceiveResponseC)
}

const onReceiveResponseC = (cErr, cRes, cData) => {
    // do things with aData
    request('https://d.com', onReceiveResponseD)
}

const onReceiveResponseD = (dErr, dRes, dData) => {
    // do things with aData
    request('https://e.com', onReceiveResponseE)
}

const onReceiveResponseE = (eErr, eRes, eData) => {
    // do things with aData
    calculateResult(aData, bData, cData, dData, eData)
}

request('http://a.com', onReceiveResponseA)

/*
To help junior engineers avoid making mistakes like the above, 
functions can return an object called a promise. 
주니어 엔지니어가 위와 같은 실수를 피하기위해,
함수는 프로미스라는 오브젝트를 리턴할 수 있다.

A promise represents the eventual result of an asynchronous action 
(e.g. making a network request, writing files to the filesystem).
프로미스는 비동기 액션의 최종 상태를 타나낸다.
(예를들어, 네트워크 요청을 받은 뒤, 파일을 쓰는 등.)
*/

// The two most commonly used promise methods are: then, catch
// 가장 많이쓰이는 2가지 프로미스 메서드는 then과 catch가 있다.

/*
then :
then은 promise가 끝났을 때 불려올 함수의 아규먼트를 기다린다. 
프로미스가 fulfilled되면, then은 반환된 값을 받고 함수를 호출한뒤
그 반환된 값을 아규먼트에 넣는다.

catch :
catch는 프로미스가 에러에 직면했을 때 불러올 함수의 아규먼트를 기다린다.
프로미스가 에러가나면 캐치는 에러 객체를 받고, 
함수를 불러오며, 에러는 아규먼트가 된다.
*/

