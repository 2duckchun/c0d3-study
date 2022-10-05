// This function takes in an object and returns an array.
// Each element of the array is an array with 2 elements, a key and its corresponding value in the object.
/*
Object.entries 메서드는 오브젝트를 받고 어레이를 반환한다.
어레이의 각각의 엘리멘트는 2개의 엘리멘트를 가진 어레이가 되며,
이는 배열의 키와 그에 상응하는 밸류로 이루어집니다.

즉, entries는 ... 오브젝트를 배열화 해주는 것이라고 본다.
*/

const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong'
}
const result = Object.entries(info)
console.log(result);