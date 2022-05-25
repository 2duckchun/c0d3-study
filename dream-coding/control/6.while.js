// while(조건) {}
// 조건이 false가 될 때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
    console.log(num);
    num--;
}

let isActive = true;
let i = 0;
/* while(isActive) {
    console.log('아직살아있다!');
    if(i === 1000) {
        break;
    }
    i++;
} */

do {
    if(i === 5) {
        console.log(`${i} end`);
        break;
    }
    console.log(`${i} do-while`);
    i++;
}while(isActive);