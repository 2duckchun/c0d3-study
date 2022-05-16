class Counter {
  #value;
  constructor(startValue) {
    if (isNaN(startValue) || startValue < 0) {
      this.#value = 0;
    }
    else {
      this.#value = startValue;
    }
  }
  get value() {
    return this.#value;
  }

  increment = () => {
    this.#value++;
  }
}

const counter = new Counter();
counter.increment();
counter.increment();
console.log(counter.value);

const counter18 = new Counter(18);
counter18.increment();
counter18.increment();
console.log(counter18.value);