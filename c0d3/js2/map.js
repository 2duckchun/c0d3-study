// Now that you know how to add and remove elements from arrays, we can now explore some functions that help you save time!
// We will be covering the most common functions used in JavaScript.
// 이제 당신은 어떻게 어레이에 엘리먼트를 추가하고 삭제하는지 알았고, 이제는 내 시간을 지킬 수 있는 몇가지 기능에 대해 탐험해볼 것이다.
// 여기서는 자바스크립트에서 자주 쓰이는 몇가지 기능들에 대해 커버링해볼 것이다.

// Let's say you have an array of people's ages: const ages = [22, 28, 80, 48, 32]
// 여기 age라는 어레이가 있다.

// Starting with this array, you want to get a new array of people's age 5 years from now.
// 이 어레이와 함께, 이 age가 각 5씩 증가한 새로운 어레이를 얻고 싶다.

// You could write a function yourself, but this is such a common use case that JavaScript arrays have a built in function that helps you do this quickly, called map.
// 이때 내 맘대로 함수를 작성할 수도 있겠지만, 보통 이럴때 쓰이는 map이라는 빌트인 펑션이 있다. 

const ages = [22, 28, 80, 48, 32]
const add5 = (x) => {
    return x + 5
}
const fiveYearsLater = ages.map(add5)
console.log(fiveYearsLater);

/*

add5(22, 0, [22, 28, 80, 48, 32]) -> 27
add5(28, 1, [22, 28, 80, 48, 32])
add5(80, 2, [22, 28, 80, 48, 32])
add5(48, 3, [22, 28, 80, 48, 32])
add5(32, 4, [22, 28, 80, 48, 32])

*/



// Map takes in a function, applies the function to every element in the array, and returns a new array of the same length. 
// 맵은 펑션을 인수로 받는다. 펑션은 모든 어레이의 엘리먼트에 적용되며, 같은 길이의 어레이를 리턴한다.

// The input function is called for every element and the return value from your input function is put into the new array.
// 인풋 펑션은 각각의 엘리먼트에 호출되며, 인풋 펑션의 리턴값은 새로운 어레이에 넣어진다. 

// Note that the original array isn't changed.
// MAP 빌트인펑션은 오리지날 어레이를 변경하지 않는다는걸 주목해라.

// When map runs the input function, it will actually pass in 3 arguments: the current element in the array, the index of the current element, and the original array itself. 
// 인풋 함수가 실행되면, 이것은 사실 3개의 인자를 받는다. : 어레이의 현재 엘리멘트 / 엘리먼트의 인덱스 / 오리지날 어레이

// Notice that our add5 function above only used the first parameter, and that's OK—functions don't have to have a parameter for every argument that might be given. 
// add5 펑션이 인자를 하나만 받는 것처럼 기술되어 있어도 이것은 구동되는데 문제는 없다. 각 인수는 알아서 주어지게 될 것이다.

// But let's see what each call to add5 actually looked like:


// More example

// The input function is called with the element in the array
// 인풋 펑션은 배열의 엘리먼트를 각각 순회함.

// as well as the index of the element. It is rare to use the third parameter.
// 뿐만아니라 엘리먼트의 인덱스도 순회함/ 3번째 파라미터(오리지널 배열)까지 쓰는 경우는 좀 레어한 경우.

const peppers = [5, 6, 6].map((element, index) => {
    return element + index
}) // peppers will be [5,7,8] because [5+0,6+1,6+2]


const melon = (delta, wax) => {
    return delta + wax + 1
}
const peppers2 = [5, 6, 6].map(melon).map(melon) // what is peppers?
// 첫번째 map
// [5, 6, 6] 
// [6, 8, 9] // delta + wax + 1
// [7, 10, 12]
// 따라서, peppers2 = [7, 10, 12]