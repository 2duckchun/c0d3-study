// 단락 회로 평가

// result1 = 10 || 100; // t
// result2 = 0 && 100; // f
// result3 = null || 100; // t
// result4 = null && 100; // f

// username = 'hojun';
// result5 = username || '유저 이름이 없습니다'

// username = undefined;
// result5 = username || '유저 이름이 없습니다'

let result1;
let result2 = result1 ?? 100;

let result3 = 10;
let result4 = result3 ?? 100;

let result5 = null;
let result6 = result5 ?? 100;

typeof 10
typeof '10'