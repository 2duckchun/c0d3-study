const obj = {
    name: '덕춘',
    age: 30,
};

// 코딩하는 시점에, 정적으로 접근이 확정됨.
console.log(obj.name);
console.log(obj.age);

// 동적으로 속성에 접근하고 싶을 때 대괄호 표기법 사용!
function getValue(key) {
    return obj[key];  // console.log(apple['name']); 대괄호표기법 사용
}

console.log(getValue('name'));

function addKey(key, value) {
    obj[key] = value;
}

addKey('wannabe', 'engineer');
addKey('bastard', 'John Snow');
console.log(obj);

function deleteKey(obj, key) {
    delete obj[key];
}

deleteKey(obj, 'bastard');
console.log(obj);