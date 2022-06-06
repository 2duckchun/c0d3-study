const fruits = ["사과", "바나나", "딸기", "배"];
fruits.forEach((v, index) => console.log(index));

// find : 제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "우유", price: 2 };
const item2 = { name: "과자", price: 3 };
const item3 = { name: "김밥", price: 1 };
const products = [item1, item2, item3, item2];
let result = products.find((value) => value.name === "과자");
console.log(result);

// findIndex : 제일 먼저 조건에 맞는 아이템의 인덱스를 번환
result = products.findIndex((value) => {
  return value.name === "과자";
});
console.log(result);

// 배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === "과자");
console.log(result);

// 배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === "과자");
console.log(result);

// 조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === "과자");
console.log(result);

console.clear();

// Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는
// 변환해서 새로운 배열 생성

const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);