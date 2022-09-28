// Let's say you have an array of people's ages: const ages = [22, 26, 80, 48, 32]
// If you want to get an age that is greater than 77 from the array, use find!
// 만약에 어레이에 어떤 조건의 엘리먼트가 있는지 확인해보려면 find를 사용해봐라...!

// find takes in an input function, and returns the first element which the function returns a truthy value for. If nothing is found, find returns undefined.
// find는 인풋펑션을 파라미터로 받고, 인풋펑션을 truthy값으로 만드는 어레이 내의 첫번째 엘리먼트를 리턴한다.
// 아무것도 찾지 못했다면 undefined를 리턴한다.
// 어레이 덩어리에 내가 찾는 값이 있는지 없는지 찾기 유용하다.

const ages = [22, 26, 80, 48, 32]
const isHereIn48 = ages.find(e => {
    return e === 9
})

console.log(isHereIn48); 