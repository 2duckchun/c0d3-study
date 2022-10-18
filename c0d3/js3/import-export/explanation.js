/*

Imagine you have created a bunch of awesome functions that you want to use in other files. 
만약 너가 괜찮은 함수를 만들었고, 이것을 다른 파일에 사용하고 싶다고 상상해보자.

To do this, you simply give the exports key of the module object a value.
이를 위해, 모듈 오브젝트의 exports 키에 함수를 값으로 줄 수가 있다.

Whatever value you set will be exported.
어떤 값이던 exported로 설정할 수 있다.

module.exports is a keyword provided by nodeJS. You've seen it used to export solution files to a test file.
모듈.exports는 nodeJS 키워드로 제공된다. 이것은 exports 솔루션 파일의 테스트파일로 내가 이미 경험해본 바 있다.


Some modules are dropping support for commonJS. 
어떤 모듈들은 commonJS의 지원을 받지 않는다.

You may have to use import instead of require and write "type": "module" into your package.json file. 
그래서 import를 다른 형식으로 해야하는데, 리콰이어 대신, import를 써야하고, package.json 파일에 "type" : "module" 을 써줘야 한다.

Read more ESM modules
ESM modules에 대해 읽어보아라.

*/

module.exports = [1, 2, 3]
// 모듈.exports는 어레이( [1, 2, 3] )이고
// module 자체는 객체이다.
