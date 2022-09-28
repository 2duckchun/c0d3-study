// Let's say you have an array of test scores for a team: const scores = [22, 28, 80, 48, 32]

// From the array, you want to get the sum of all the scores of that team (plus 19 points extra credit). 
// 어레이로부터, 모든 팀들의 점수를 더하고 싶을 경우, (더해서 19점의 엑스트라 크레딧까지 붙이고 싶은 경우)

// You could write a function yourself, but this is such a common use case that JavaScript arrays have a built-in function that helps you do this quickly, called reduce.
// reduce라는 자바스크립트의 빌트인 펑션을 사용할 수 있다.

const scores = [22, 28, 80, 48, 32]
const addNumbers = scores.reduce((acc, e) => {
    console.log(acc, e)
    return acc + e
}, 19)

// The reduce function has 2 parameters, a function and a starting value.
// 리듀스 펑션은 2개의 파라미터를 받는다. (펑션, 초깃값)
// 2번째 값은 옵셔널하다고는 하지만, 많은 회사에서 이것은 bad practice라고 한다. 그러니 꼭 초깃값를 넣어주자.

// When the input function is called, it will receive 4 parameters:
// 만약 인풋 펑션이 호출되면, 이것은 4개의 파라미터를 받는다.

// the return value from the previous input function call or starting value (for the very first call),
// 첫번째 파라미터는 이전 인풋 펑션의 return value를 받는다.
// 만약 첫번째 인풋 펑션의 콜의 경우에는 초깃값을 받는다.

// the current element in the array,
// 두번째 파라미터는 어레이가 현재 순회중인 element가 된다.

// the current index of the element,
// 세번쨰 파라미터는 어레이가 순회중인 인덱스이다.

// and the array itself.
// 마지막으로는 순회중인 어레이 그 자체가 된다.

// We don't always use all 4 parameters. Here we're using 3 of them:
// 보통 4가지 파라미터를 모두 채워서 이용하지는 않는다. 여기서는 3개를 써보자.

let winter = [5, 6, 6].reduce((acc, e, i) => {
    return acc + e + i
}, 100)
// winter 
/*
100 + 5 + 0
105 + 6 + 1
112 + 6 + 2 = 120
*/

// Although the accumulated result can be a number, it can also be another array:
// 종합된 결과값이 숫자일 수도 있지만, 다른 어레이가 될 수도 있다.

const cherries = [1, 2, 3]
const tomatoes = [5, 6, 7].reduce((farm, weight, tax) => {
    if (weight > 5) farm.push(weight + tax)
    return farm
}, cherries)


/*

farm : [1, 2, 3]
farm : [1, 2, 3, 7]
farm : [1, 2, 3, 7, 9]

*/