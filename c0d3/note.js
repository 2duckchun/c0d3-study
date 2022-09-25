// Write a function named primeMachine that takes in a number and returns a function.

// Each time the returned function is called, return the next prime number (starting from the input number).
// (For a new coder, this can be a hard problem. 
// This problem was asked during an onsite interview, so it is okay if you can't come up with the answer yourself.
// This problem involves creating other functions to help you get the correct solution.)


const isPrime = (num, i = 2) => {
    if (num < 2) return false
    if (num === i) return true
    if (!(num % i)) return false
    return isPrime(num, i + 1)
}

const getNextPrime = (num) => {
    if (isPrime(num)) {
        return num
    }
    return getNextPrime(num + 1)
}

const primeMachine = (num) => {
    if (num < 2) {
        num = 2
    }
    getNextPrime(num)
    return () => {
        const result = getNextPrime(num)    
    }
}

// 처음 입력된 수가 소수인지 확인해야함.
// 소수라면 그 값을 출력하고 담아놓음
// 소수가 아니라면 소수가 될때까지 어떤 함수를 동작해서 소수를 만들고 그 값을 담아놓음.


const getPrime = primeMachine(10)
getPrime() // 11
getPrime() // 13
getPrime() // 17
getPrime() // 19
