const person = {
    isHuman: false,
    printIntroduction: function () {
        console.log(`My name is ${this.name}. Am i human?${this.isHuman}`);
    }
}
console.log(person);

const me = Object.create(person)
me.name = 'Matthew'
me.isHuman = true
me.printIntroduction()
console.log(me);