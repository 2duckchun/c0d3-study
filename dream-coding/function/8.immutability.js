// 함수 내부에서 외부로부터 주어진 인자의 값을 변경하는 것은 좋지 않음.
// 정말 좋지 않음.
// 원시값 - 값에 의한 복사
// 객체값 - 참조에 의한 복사 (메모리주소 전달)

function display(num) {
    num = 5;
    console.log(num);
}
const value = 4;
display(value);
console.log(value);

/* let gogo = (a, b) => console.log(a + b);
gogo(1, 5); */

function displayObj(obj) {
    obj.name = 'Bob'; // ❌ 외부로부터 주어진 인자(오브젝트)를 내부에서 변경 ❌
    console.log(obj);
}

const DC = {name: 'DC'}
displayObj(DC);
console.log(DC);

function changeName(obj) { // 이름부터 변경하는 느낌!
    return {...obj, name: 'Bob' }; // 반환할때는 새로운 오브젝트 생성!
}