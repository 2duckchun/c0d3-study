function Person(name, age) {
    // new가 위의 Person 오브젝트와 함께 씌어졌을 때, 아래가 생략되어 동작한다.
    const this = Object.create(Person.prototype)
    
    thisa.name = name
    thisa.age = age
    
    // 이것도 생략되어서 동작한다.
    return thisa
}

const b = Person('2DC', 25)
console.log(b);