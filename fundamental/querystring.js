const url = require('url');
const querystring = require('querystring');

const parseUrl = url.parse('https://kin.naver.com/qna/detail.naver?d1id=8&dirId=80510&docId=114044734');
const query = querystring.parse(parseUrl.query);
console.log('querystring.parse():', query);
console.log('querystring.stringify():', querystring.stringify(query));