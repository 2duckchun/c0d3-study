const A = require('./globalA');

global.message = '안녕하세요';
console.log(A)
console.log(global)
console.log(A());