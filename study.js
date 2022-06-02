function myName() {
    return console.log(this.name);
}

const p1 = { name : '2DC' };
const p2 = { name : 'PJY' };

p1.sayName = myName;
p2.sayName = myName;

p1.sayName();
p2.sayName();