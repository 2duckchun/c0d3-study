// forEach works exactly the same as map above.
// forEach는 위의 map과 정확히 동일하게 동작한다.

// The only difference is that forEach runs its input function on each element and returns undefined rather than a new array. 
// 다른점은 forEach 자체는 undefined를 리턴한다.

// Just like with map, the input function will be given the current element, its index, and the original array, 
// 파라미터로는 element와 index와 현재 어레이를 받고

// and we can use this information to write a function that modifies an array without returning anything:
// 본인과 연결된 어레이 자체를 변경해준다.
// 즉, forEach 자체는 undefined를 리턴하고, 연결된 배열은 map과 같이 동작하여 변경해준다. (return 없는 map)

const ages = [22, 28, 80, 48, 32]
const add5InPlace = (e, i, arr) => {
    arr[i] = arr[i] + 5
}
console.log("변경 전", ages);

const b = ages.forEach(add5InPlace)
console.log(b);
console.log(ages);

// Note that we could have done this with map, 
// 맵과 포이치를 같이 배운 상황에서...

// but map by its name implies "mapping" elements of one array to a new array, 
// map은 이름 자체가 오리지날 어레이와 새로운 어레이를 매핑한다는 개념이고

// and so developers use forEach in this case to make the intention of their code clear.
// forEach를 사용할때는 코드를 좀 깔끔하게 하고싶은 의도가 있다. (새로운 어레이를 만들지 아니한다. 기존의 배열을 수정한다.)



const arr = []

const solution = data => {
    arr.push(data)
}
// at this point, what is arr?
// 답: []

const arr2 = [1, 2, 3]

arr2.forEach(() => {
    arr.push(arr2)
})
// at this point, what is arr?
// [[1, 2, 3], [1, 2, 3], [1, 2, 3]]

arr2[2] = 'three'
// at this point, what is arr?
// [[1, 2, three], [1, 2, three], [1, 2, three]]