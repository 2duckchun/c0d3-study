// Mocking을 알기 전에, function이 사실은 스페셜한 object 중 하나라는 것을 인지해야한다.
// function이 사실은 객체이기 때문에, 보통 object처럼 properties를 이용할 수 있다.

const a = () => {
    a.count = (a.count || 0) + 1
    console.log(`count is currently ${a.count}`)
}
console.log(a());
console.log(a());
console.log(a());
console.log(a());

console.log(a);
console.log(a.count);

a.count = 99
console.log(a());