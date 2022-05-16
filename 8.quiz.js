// 퀴즈!
// 문자열의 모든 캐릭터를 하나씩 출력하라

const text = 'Hello World!';
textNumber = text.length;
for (let i = 0; i < textNumber; i++) {
    console.log(text[i]); 
}

const ids = 'user1, user2, user3, user4';
const idsBox = (ids.split(', '));
console.log(idsBox);

let timer = setInterval(() => {
    const now = new Date();
    console.log(now.toLocaleString('ko-KR'));
}, 1000);

let timeOut = setTimeout(() => {
    clearInterval(timer);
    console.log('이제 끝!');
}, 4000);