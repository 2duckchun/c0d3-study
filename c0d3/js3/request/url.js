/*
http://www.yoursite.com/05/22/2012/index.html?source=briliantcampaign

Protocol: Specifies how data is sent over the the Internet
Hostname: Helps identify where to send a request to
Path & Query Parameters: Helps the server determine what to do with the request
 ː Query parameters should be used for data & separates the different pieces of data
 ː https://macys.com/shoes?size=4&brand=allbirds&type=outdoors

브라우저에 URL을 타이핑하면, 브라우저는 포켓몬 api에 요청을 보낸다.
사실, 어떤 웹사이트에 요청을 보내든, (https://news.ycombinator.com 같은...) 너는 브라우저가 받는 같은 HTML 응답을 보게 될 것이고,
브라우저는 HTML을 읽고, 각각 태그를 실행한다.
(HTML을 요청하면 html 문서가 날라옴)
*/

const request = require('request')
request('https://news.ycombinator.com', (err, res, data) => {
    console.log(data) // this is a string of HTML tags
})