const fruits = ['바나나', '사과', '딸기', '복숭아'];
console.log(fruits);

// 배열 아이템을 참조하는 방법.

console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length); // 배열안에 몇개 있는지 확인

for (let i = 0; i < fruits.length; i++) {
    console.log(`나는야 ${fruits[i]}`);
}
// const fruit = ['바나나', '사과', '딸기', '복숭아'];
// 추가, 삭제 - 좋지 않은 방식
fruits[fruits.length] = '포도'
console.log(fruits);

delete fruits[1];  // 좋지 않소이다.
console.log(fruits);

