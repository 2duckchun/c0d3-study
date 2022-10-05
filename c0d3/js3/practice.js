let user = [
    {
        //key : value
        id: "licat",
        pw: "1234", // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
        name: "leehojun",
        email: "paul@weniv.com",
        active: true,
    },
    {
        //key : value
        id: "lion",
        pw: "2345", // 81DC9BDB52D04DC20036DBD8313ED055 이렇게 저장합니다. ("MD5는 사용하지 않습니다.")
        name: "leehojin",
        email: "pa@weniv.com",
        active: true,
    },
];

console.log(user[0]['id']);

let a = 10;
let b = 20;
let c = 30;
let e = {a, b, c}
console.log(e)
e["a"] = 50
console.log(e)
console.log(a)

let txt = 'hello'
let txt2 = {
    0: 'h',
    1: 'e',
    2: 'l',
    3: 'l',
    4: 'o'
}

console.log(txt[1]);
console.log(txt2[1]); // 유사 배열 객체

function sum(x, y) {
    return x + y;
}

let test = {
    one: sum,
    two: console.log,
    three: 'hello',
    four: [10, 20, 30],
    fivr: "10",
    six: 100
}



console.log(test);
test.two("태수")

// let test3 = {'one', 'two',' three'}

