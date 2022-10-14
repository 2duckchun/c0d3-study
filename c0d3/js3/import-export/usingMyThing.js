const fun = require('./myFun.js')
const Obj = require('./myObj.js')

console.log(fun());
console.log(Obj.age + 5);
console.log(fun() + (Obj.age + 5));