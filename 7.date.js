// UTC 기준 (협정 세계시, 1970년 1월 1일 UTC 자정과의 시간 차이를 밀리초 단위로 표기)

console.log(new Date());
console.log(new Date('Jun 5, 2022'));

console.log(Date.now());

const now = new Date();
now.setFullYear(2023);
now.setMonth(10); // 0이 1월
console.log(now.getFullYear());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getTime());
console.log(now);

console.log(now.toString());
console.log(now.toTimeString());
console.log(now.toISOString()); // ISO8601
console.log(now.toLocaleString('en-US'));
console.log(now.toLocaleString('ko-KR'));