// a가 null도 아니고 undefined도 아니면 a
// 그 외의 경우는 b

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

console.log(firstName ?? nickName ?? "익명의 사용자")

let a;
let b;
let c;

let d = a ?? b ?? c
console.log(d);

a = ['']