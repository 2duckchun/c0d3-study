/*
Es6의 객체 디스트럭쳐링 할당은 객체의 각 프로퍼티를 객체로부터 추출하여 1개 이상의 변수에 할당함.
객체 디스트럭처링 할당의 대상은 객체여야 함. -> 할당 기준은 프로퍼티 키
선언된 변수 이름과 프로퍼티 키가 일치하면 할당됨

*/

const user = {firstName: 'Ungmo', lastName: 'Lee'}
const {firstName, lastName}  = user
console.log(firstName, lastName);

/*
위는 아래를 축약표현 한 것임

const {firstname: firstname, lastName: lastName} = user
*/