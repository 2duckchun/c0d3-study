function add(num1, num2) {
    console.log('function')
    return num1 + num2;
}

// 함수는 호출해야함.

const result = add(1, 2);
console.log(result);


// 사용예제 2

function fullName(firstName, lastName) {
    return `${firstName} ${lastName} ❤`;
}

console.log(fullName('박', '철수'));

