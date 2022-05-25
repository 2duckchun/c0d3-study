class Employee {
    constructor(name, department, hoursPerMonth, payRate) {
        this.name = name;
        this.department = department;
        this.hoursPerMonth = hoursPerMonth;
        this.payRate = payRate;
    }
    calculatePay() {
        return this.hoursPerMonth * this.payRate;
    }
}

class FullTimeEmployee extends Employee {
    static #PAY_RATE = 10000;
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE)
    }
}

class PartTimeEmployee extends Employee {
    constructor(name, department, hoursPerMonth) {
        super(name, department, hoursPerMonth, 8000)
    }
}

const deuku = new FullTimeEmployee('득우', '기획', 50);
console.log(deuku.calculatePay());