/*
오브젝트는 자바스크립트에서 가장 중요한 컨셉 중 하나이다.
함수도 사실은 자바스크립트의 오브젝트라고 볼 수 있으며, 어레이도 오브젝트라고 볼 ㅅ ㅜ 있다.
사실상 자바스크립트의 모든 것은 오브젝트이다.

어레이처럼, 오브젝트도 다양한 데이터를 저장할 수 있게 해준다.
어레이를 넘버링이 된 락커룸이라고 상상할 수 있다면,
오브젝트는 문자열로 라벨링된 락커룸이라고 상상할 수 있다.
라벨을 키라고 부르고, 그 컨텐츠는 밸류라고 한다.
키값쌍. 키, 밸류라고 보면 된다.
오브젝트를 만들기 위해서는 {}를 사용한다.

*/

const student1 = {
    first : 'Harry',
    last : 'Potter',
    age : 25
}
// student1 오브젝트는 3개의 키(first, last, age)를 가지고 있고, 각각 키에 상응하는 harry, potter, 25라는 값을 가지고 있음.

const student2 = {
    first : 'Ron',
    last : 'Weasley',
    age : 24
}

const total = student1.age + student2.age
console.log(total);

