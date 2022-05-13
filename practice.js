class Human {
    constructor(age, tall) {
    this.age = age;
    this.tall = tall;
    }
    static live = true;
}

class DC extends Human {
    constructor(live) {
        super();
        this.live = live;
    }
    get heWant() {
        console.log('be backend developer');
    }
    set heWant(value) {
        console.log('set =', value);
    }
}

const DC2 = new DC('long long live with jiyoung');
console.log(Human);
console.log(DC2);
console.log(DC2.heWant);
DC2.heWant = '개발자 되고싶어어어';