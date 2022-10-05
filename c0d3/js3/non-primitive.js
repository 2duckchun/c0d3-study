// 어레이처럼, 오브젝트도 비원시 자료다.

const star = { name: 'Tarzan'}
const star2 = star
star2['friend'] = star
star2['friend']['lover'] = 'jane'
console.log("star :",  star);
console.log("star2 :",star2);
/*

{
    name: 'Tarzan'
    lover: 'jane'
    friend: object {name: 'Tarzan'
                    lover: 'jane'}
}

{
    name: 'Sarah'
    lover: 'jane'
    friend: object {name: 'Sarah'
                    lover: 'jane'}
}

*/

// const allStars = [star, star2]
// allStars[0]['lover'] = allStars[1]['name']

// /*

// {
//     [name: 'Sarah'
//     lover: 'Sarah'
//     friend: object {name: 'Sarah'
//                     lover: 'jane'}]
//     ,[{name: 'Sarah'
//                     lover: 'jane'}]
// }

// */

// // Values can be anything, including a function

// const snacks = {
//     nutella: () => {
//         return 200
//     },
//     pixyStix: () => {
//         return 9
//     },
//     lays: () => {
//         return 135
//     }
// }

// let calories = snacks['nutella']()
// calories = snacks.pixyStix()
// console.log(calories);

// /*
// Here are some more examples with functions for you to work through. 
// 여기에 펑션에 대해 익힐 수 있는 예제가 있다.

// In the first one, we introduce the building blocks of a concept called promises that we'll get to later in this chapter. 
// 첫번째 것은 다음 챕터에서 알게 될 컨셉인 프로미스의 컨셉에 대해 알려줄 것이고.

// We'll learn a function called fetch() that returns a promise object. 
// 프로미스 오브젝트를 리턴하는 fetch()라는 펑션에 대해 알려줄 것이다.

// The promise object has a then() property, 
// which returns a promise object so you can keep chaining more then() properties together until what you want to accomplish is completed: fetch().then().then().then() etc. 

// 프로젝트 오브젝트에는 then이라는 프로퍼티가 있고, 이 then은 프로미스 오브젝트를 계속 반환할 수 있다. 내 작업이 달성될때까지.

// Here we introduce this kind of behavior where an object's function returns the object itself.
// 여기에 비슷한 종류의 것을 설명해줄게. 오브젝트가 스스로를 반환하는 것을.

// */

console.clear()

const prepareStage = {
    then: (data) => {
        console.log(data);
        return prepareStage
    }
}

prepareStage.then('이것을').then('출력').then('해라')