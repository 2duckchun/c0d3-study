function add(a, b) {
    return a + b;
}  // 리턴을 명시적으로 작성하지않으면 return undefined이 적용됨. (undefined 반환)
const result = add(1, 2);
console.log(result);

// return을 함수 중간에 하게 되면 함수가 종료됨.
// 사용예 : 조건에 맞지 않은 경우 함수 도입부분에서 함수를 일찍이 종료

function print(num) {
    if (num < 0) {
        return;
    }
console.log(num);
}

print(-1);
print(1);
print(9);
