class Count {
  constructor(check) {
    if (check < 0 || typeof check == string || typeof check == boolean) {
      this.check = 0;
    } else {
      this.check = check;
    }
  }
  checkProcess = () => {
    if (+check > 0) {
      checknumber += +check;
    } else {
      checknumber += 0;
    }
  };
}

const countCheck = new Count();
countCheck(5);
console.log(countCheck);
// const countCheck = new Count(~~)
// countCheck(ff)
// console.(log)
