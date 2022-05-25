let string = 'i am string';
string = `안녕!`;
console.log(string);

//특수문자 출력하는 법
string = '"안녕!"';
console.log(string);

string ='안녕!\n덕춘아\t\t내 이름은 \\덕춘\\이야\u09AC'
console.log(string);

// MDN, 이스케이프 표현

// 템플릿 리터럴 (Template Literal)

let id = '덕춘';
let greetings = '"안녕!" ' + id + '\n즐거운 하루 보내요!"'
console.log(greetings);

greetings = `"안녕!" ${id}
즐거운 하루 보내요!'`

console.log(greetings);