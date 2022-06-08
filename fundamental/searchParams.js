const { URL } = require('url');
const myURL = new URL('https://kin.naver.com/qna/detail.naver?d1id=8&dirId=80510&docId=114044734');
console.log('searchParams:', myURL.searchParams);
console.log('searchParams.getAll():', myURL.searchParams.getAll('category'));
console.log('searchParams.get():', myURL.searchParams.get('d1id'));
console.log('searchParams.has():', myURL.searchParams.has('dirId'));
console.log('serachParams.keys():', myURL.searchParams.keys());
console.log('serachParams.values():', myURL.searchParams.values());

myURL.searchParams.append('filter', 'es3');
myURL.searchParams.append('filter', 'es5');
console.log(myURL.searchParams.getAll('filter'));
myURL.searchParams.set('filter', 'es6');
console.log(myURL.searchParams.getAll('filter'));
myURL.searchParams.delete('filter');
console.log(myURL.searchParams.getAll('filter'));
console.log('searchParams.toString():', myURL.searchParams.toString());
myURL.search = myURL.searchParams.toString();