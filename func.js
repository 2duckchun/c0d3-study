const { odd, even } = require('./var');

function checkOddEven(num) {
    if (num % 2) { // 홀수
        return odd;
    }
    return even; // 짝수
};

console.log(checkOddEven(1));

module.exports = checkOddEven;