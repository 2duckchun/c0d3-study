class Salary {
    constructor(name, dep, worktime) {
        this.name = name;
        this.dep = dep;
        this.worktime = worktime;
    }
}

class Fulltime extends Salary {
    #salary
    constructor(name, dep, worktime) {
        super(name, dep, worktime);
    }
    get info() {
        console.log(`${this.name}, ${this.dep}, ${this.worktime}, ${this.#salary = this.worktime * 10000}`)
    }
    get value() {
        return this.#salary = this.worktime * 10000;
    }
}

const DU = new Fulltime("공밀레", "기획과", 40);
console.log(DU.info);
console.log(DU.value);

class Parttime extends Salary {
    #salary
    constructor(name, dep, worktime) {
        super(name, dep, worktime);
    }
    get info() {
        console.log(`${this.name}, ${this.dep}, ${this.worktime}, ${this.#salary = this.worktime * 8000}`)
    }
    get value() {
        return this.#salary = this.worktime * 8000;
    }
}

const TS = new Parttime("김태수", "뭐없음", 40);
console.log(TS.info);
console.log(TS.value);