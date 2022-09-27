/*
오브젝트는 자바스크립트에서 가장 중요한 컨셉 중 하나이다.
함수도 사실은 자바스크립트의 오브젝트라고 볼 수 있으며, 어레이도 오브젝트라고 볼 수 있다.
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

console.log('hello')

/*
    console은 엔지니어가 우리를 위해 만든 오브젝트이다.
    console은 log라는 key를 가지고 있으며, 그 key의 value는 function이었던 것이다.
    따라서 console.log("hello")의 의미는...
    console 이라는 object의 key중 하나인 log를 호출한 것이고
    그 key에 상응하는 value는 어떤 기능을 하는 function(메서드)인 것이다.
*/

const console2 = {
    log : (data) => {
        alert(data)
    }
}

console2.log('안녕하세요')
console2.log('반갑습니다.')