// Loop Statement
// for(변수선언문; 조건식; 증감식) {}
// 실행순서:
// 1. 변수선언문
// 2. 조건식의 값이 참이면 {} 코드블럭 수행
// 3. 증감식을 수행
// 4. 조건식이 거짓일 될때까지 2,3번 반복

for(let i = 0; i < 5; i++) {
    console.log(i);
}

for(let i = 0; i < 5; i++) {
    for(let j = 0; j < 5; j++) {
        console.log(i, j);
    }
}

// 무한루프
// for(;;) {}
// 간혹 조건이 영원히 T일 수 있음.
// 언젠가는 false가 되도록 해야함

// 반복문 제어: continue, break
for(let i = 0; i < 20; i++) {
    if(i === 10) {
        console.log('i가 드디어 10이 되었다!');
        continue; // 그냥 증감하고 다음으로 넘어감.
        // break; // 반복문을 특정 조건에 종료
    }
    console.log(i);
}
