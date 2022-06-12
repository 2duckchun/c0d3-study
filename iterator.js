for (const i of [1, 2, 3]) {
  console.log(i);
}
console.log();

const iterable = [1, 2, 3];
const iterator = iterable[Symbol.iterator]();
for (;;) {
  const res = iterator.next();
  if (res.done) break;
  const i = res.value;
  console.log(i);
}
