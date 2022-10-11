<<<<<<< HEAD
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
=======
// Write a function called commas that returns a string of all of an object's values separated 
// by commas.

Object.prototype.commas = (obj) => {
  const b = Object.values(obj)
  return b.reduce((acc, e, i) => {
    let comma = ', '
    if (i === 0) comma = ''
    return acc + comma + e
  })
}

const info = {
  ironman: 'arrogant',
  spiderman: 'naive',
  hulk: 'strong'
}
const result = commas(info)
console.log(result);
// result is 'arrogant, native, strong'
>>>>>>> 901051feb63ff1f1711104e50cad62ec350e1d57
