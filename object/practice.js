const obj = {
    name: 'DC',
    age: '30',
};  // obj라는 객체 생성

function getValue(value) {
    return obj[value];
}; // getValue 라는 함수 생성. value를 받으면 obj.value 형식으로 리턴받음.

console.log(obj.name); // 'DC'
console.log(getValue('name'));  // obj['name'] = obj.name (bracket notation / 대괄호 표기법)

function addKey(key, value) {
    obj[key] = value;
}  // key로 프로퍼티 생성 뒤 값 설정.

addKey('tall', '178'); // obj['tall'] = '178' / obj.tall = '178'

function deleteData(value) {
    delete obj[value]
}
/* 화살표 함수로 바꾸면 아래와 같음.
 deleteData = (value) => {
    delete obj[value]
}  */

deleteData('age');
console.log(obj);
