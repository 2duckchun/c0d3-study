//알고리즘에서 출제 많이됨!!

const textObj = new String('Hello World!');
const text = 'Hello World!';
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text.charCodeAt); // 아무거나 입력 후 컨트롤 클릭
console.log(text[0]); // 배열 접근
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0)); // 함수 접근
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf('l'));
console.log(text.lastIndexOf('l'));

console.log(text.includes('tx'));
console.log(text.includes('H'));
console.log(text.startsWith('He'));
console.log(text.endsWith('!'));

console.log(text.toUpperCase());
console.log(text.toLowerCase());
console.log(text.substring(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = '               spaceeeee       ';
console.log(space.trim());
console.log(space);

const longText = 'Get to the,point';
console.log(longText.split(' ')); // 스페이스로 끊어서 반환
console.log(longText.split(' ', 2));