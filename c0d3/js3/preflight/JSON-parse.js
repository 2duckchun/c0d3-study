// If you used the previous function JSON.stringify to convert an array into a string, 
// 만약 당신이 JSON.stringify를 통해 어레이를 스트링으로 변환했었다면

// how do you convert the string back into an array? You use the JSON.parse function.
// 이젠 어떻게 스트링을 어레이로 컨버트 할 것인지? 당신은 JSON.parse를 쓸 수 있다.

// This function takes a string and parses, or interprets it as JavaScript data.
// 이 펑션은 스트링을 파라미터로 받고, 파싱한다. 또는 자바스크립트 데이터로 해석한다.

const arr = [-18, 'Peter Parker', true]
// arr라는 어레이가 있다.

const strArr = JSON.stringify(arr)
// arr를 스트링화 한 것.

const newArr = JSON.parse(strArr)
// strArr를 파싱한 것.

const isSame = arr === newArr
// 아마 다를 것이다.
console.log(isSame);

/*
false because they have different addresses.
Because strings are primitive,
when you convert an array into a string,
the address to the array is gone.

false가 나온다. 왜냐햐면 둘은 다른 주소를 가지고 있다.
strings 원시값이고,
어레이를 스트링으로 바꿀 때
어레이에 관한 어드레스는 사라진다.

When you convert a string into an array,
the computer creates a new array (at a new address).
그리고 
스트링을 어레이로 바꿀 때
컴퓨터는 새로운 어레이와 어드레스를 할당한다.
*/


