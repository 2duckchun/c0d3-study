/*

You can also access the values of an object using the [] notation that you're familiar with from arrays.
너는 또한 엑세스할 수 있따. 오브젝트의 밸류에, [] 노테이션을 사용하여, (너가 어레이 쓸 때 쓰던 방식이야.)

document.querySelector('.button') can be written as document['querySelector']('.button')

console.log('hello') can be written as console['log']('hello')

*/

const student = {
    first: 'Harry',
    last: 'Potter',
    age: 25
}

const firstName = student['first']
console.log(firstName);

const student2 = student
student2['name'] = 'last'

console.log(student2);
console.log(student);

student2[student2.name] = 'Weasley'
console.log(student2);
console.log(student);

// The benefit of using [] for getting values is that you can use variables as keys.
// [] 노테이션으로 밸류를 찾는 방법의 장점은 key로 변수를 활용할 수 있기 때문이다.