let 참 = true;
let 거짓 = false;
console.log(참);
console.log(거짓);

// 활용예 : 불값은 is~~?

let isFree = true;
let isActivated = false;
let isEnrolled = true;
console.log(isActivated);

console.clear();
// Falshy 거짓인 값 : 0이고 없고 텅텅 빈 녀석들
console.log(!!0);
console.log(!!-0);
console.log(!!'');
console.log(!!null);
console.log(!!undefined);
console.log(!!NaN);

// Truthy 참인 값
console.log(!!1);
console.log(!!-1);
console.log(!!'text');
console.log(!!{});
console.log(!!Infinity);

