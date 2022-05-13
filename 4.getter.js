// 접근자 프로퍼티 (Accessor Property)
class Student {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.lastName} ${this.firstName}`;
    }
    set fullName(value) {
        console.log('set', value);
    }
}

const student = new Student("덕춘", "이");
student.fullName = '김 철수';  // = (할당연산자)로 호출하면 set 호출
console.log(student.firstName);
console.log(student.fullName); // . 으로 호출하면 get 호출

//console.log(student.fullName());