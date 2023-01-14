/*
가비지 컬렉션은 도달 가능성(reachability)라는 개념을 사용해 메모리 관리를 수행함.
도달 가능한 값은 어떻게든 접근하거나 사용할 수 있는 값을 의미함.
모달 가능한 값은 메모리에서 삭제되지 않음.

ex)
현재 함수의 지역 변수와 매개변수
중첩 함수의 체인에 있는 함수에서 사용되는 변수와 매개변수
전역 변수
기타 등등

위와 같은 값을 루트(root)라고 부름
*/

/*
루트가 참조하는 값이나 체이닝으로 루트에서 참조할 수 있는 값은 도달 가능한 값이 됨.
1. 전역 변수에 객체가 저장되어 있다고 가정해보자.
2. 이 객체의 프로퍼티가 또 다른 객체를 참조하고 있다면, 프로퍼티가 참조하는 객체는
도달 가능한 값이 됨.
*/

let user = {
    name: "John"
}

let admin = user
user = null

console.log(admin);
console.log(user);

function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: 'John'
}, {
    name: "Ann"
})

console.log(family);