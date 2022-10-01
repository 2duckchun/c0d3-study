// When websites send information to each other, the data is always sent and received as strings. 
// 웹사이트가 정보를 보낼때, 데이터는 보낼때나 받을때나 스트링으로 받는다.

// So what do you do if you need to send an array across the Internet? 
// 만약 인터넷을 통해 어레이를 보내려면???

// You convert it to a string first!
// 먼저 어레이를 스트링으로 바꿔줄 필요가 있다.

// 인터넷으로 자료를 보낼때는 먼저 스트링으로 바꿔줘야할 필요가 있어 JSON.stringify를 쓴다.

// When data (number, boolean, string, array, objects) is converted into a string, the string is called JSON. JSON stands for JavaScript Object Notation.
// 데이터가 스트링으로 변환된 상태에서, 변환된 스트링을 JSON이라고 부른다.
// JSON은 JavaScript Object Notation의 약어이다.


// Databases also store data as strings, so if you want to store an array of names into the database sometimes you must convert your data to a string first.
// Databases는 또한 자료를 스트링으로써 저장한다. 만약 당신이 이름들에 관련된 어레이를
// 데이터베이스 안에 저장하고 싶을 경우, 너는 반드시 데이터를 스트링으로 변경해야 한다.


// You can turn any JavaScript data into a string with JSON.stringify.
// 당신은 자바스크립트의 어떤 데이터던간에 JSON.stringify를 통해 string으로 바꿀 수 있다.

// Although JSON is primarily used for working with browsers, you can also follow along with all the below examples in node.
// 비록 JSON이 1차적으로 브라우저에서 일하기 위해 사용되더라도, 이 과정을 node 환경에서도 따라할 수 있다.



// Exceptions: cyclic data, which can happen in non-primitive data types, and functions
// 예외 상황이 있는데, 순환 데이터나 그냥 함수의 경우는 stringify가 불가능하다.
// const a = []
// a.push(a) 
// const b = JSON.stringify(a)
// Computer will get stuck trying to stringify a and throw error.
// 컴퓨터는 stringify에 오류가 걸리고 에러를 뱉어낸다.

// const c = [() => {}]
// JSON.stringify(c)

const arr = [-18, 'Charizard', true]
const strArr = JSON.stringify(arr)
