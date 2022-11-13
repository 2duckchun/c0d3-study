const arr = [1, 2, 3]

const [one, two, three] = arr
console.log(one, two, three);

const [x, y] = [1, 2]
console.log(x, y);
// 우변에 이터러블을 할당하지 않으면 에러가 발생함

const [c, d] = [1]
console.log(c, d);

const [g, , h] = [1, 2, 3]
console.log(g, h);

const [i, j, k = 6, l = 10] = [4, 5, 7]
console.log(i, j, k, l);