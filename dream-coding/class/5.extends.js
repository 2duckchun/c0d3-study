// class Tiger {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자');
//     }
//     sleep() {
//         console.log('잔다');
//     }
// }

// class Dog {
//     constructor(color) {
//         this.color = color;
//     }
//     eat() {
//         console.log('먹자');
//     }
//     sleep() {
//         console.log('잔다');
//     }
//     sleep() {
//         console.log('논다');
//     }
// }

class Animal {
    constructor(color) {
        this.color = color;
    }
    eat() {
        console.log('먹자');
    }
    sleep() {
        console.log('잔다');
    }
}

class Tiger extends Animal {}
const tiger = new Tiger('호랑색');
console.log(tiger);
tiger.eat();
tiger.sleep();

class Dog extends Animal {
    constructor(color, ownerName) {
        super(color);
        this.ownerName = ownerName;
    }
    play() {
        console.log('논다');
    }
    // 오버라이딩 (부모껄 덮어씌움)
    eat() {
        super.eat();
        console.log('강아지가 먹는다!');
    }
}

const dog = new Dog('개색', '덕춘');
console.log(dog);
dog.eat();
dog.sleep();
dog.play();