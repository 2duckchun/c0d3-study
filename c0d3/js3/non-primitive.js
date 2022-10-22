/*
Here are some more examples with functions for you to work through. 

In the first one, we introduce the building blocks of a concept called promises that we'll get to later in this chapter. 

We'll learn a function called fetch() that returns a promise object. 

The promise object has a then() property, which returns a promise object so you can keep chaining more then() properties together until what you want to accomplish is completed: fetch().then().then().then() etc. 
프로미스 오브젝트는 프로미스 오브젝트를 반환하고, 계속 then이라는 프로퍼티를 사용할 수 있게하는 then() 이라는 프로퍼티를 가지고 있고, 작업이 끝날때까지 계속 호출이 가능하다.
fetch().then().then().then().then() etc 


Here we introduce this kind of behavior where an object's function returns the object itself.
*/

const magician = {
    perform: () => {
        return magician
    }
}

const houdini = magician.perform().perform() // what is houdini?
const same = magician === houdini

console.log(houdini);
console.log(same);

const prepareStage = {
    then: (cb) => {
        cb()
        return prepareStage
    }
}

const performMAgic = () => {
    console.log('Abracadabra!')
}

prepareStage.then(performMAgic).then(performMAgic).then(performMAgic)