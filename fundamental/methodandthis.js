const person = {
    name : '2DC',
    age : 30,
    sayHi : () => console.log('Hi!'),
    indroduce : function() {
        return console.log((`hi my name is ${this.name} and i'm ${this.age} years old!`))
    }
}

person.sayHi();
person.indroduce();