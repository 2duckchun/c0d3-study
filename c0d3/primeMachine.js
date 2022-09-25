// Write a function named primeMachine that takes in a number and returns a function.

// Each time the returned function is called, return the next prime number (starting from the input number).
// (For a new coder, this can be a hard problem. 
// This problem was asked during an onsite interview, so it is okay if you can't come up with the answer yourself.
// This problem involves creating other functions to help you get the correct solution.)

// primeMachine이라는 함수를 작성해라. 이 함수는 숫자를 인수로 받고, 함수를 리턴한다.
// 매번 리턴 함수가 호출될 때마다, 다음 소수를 리턴한다. (시작은 처음 입력된 숫자부터 시작한다.)



const isPrime = (num, i = 2) => {
    if (num < 2) return false
    if (num === i) return true
    if (num % i === 0) return false
    return isPrime(num, i + 1)
}
// 소수.. : 2보다 작으면 소수가 아니다.
// 본인을 본인으로 나눴을 때 떨어진다면? 소수이다. (즉, num과 나누는 수가 같아지면 소수가 된다.)
// 본인을 본인이 아닌 수(본인에 수렴하고 있는 정수)와 나눴을 때 나눠떨어진다면? 소수가 아니다.
//num이 2보다 크거나, num과 i가 같지 않거나, num을 i로 나눴을때 0이 되는게 아니라면
// i의 카운트를 하나 올려 isPrime을 재귀시킨다.


// 받은 수가 소수라면? 받은 수를 리턴한다.
// 받은 수가 소수가 아니라면? 받은 수에서 1을 더하고 재귀한다.

const getNextPrime = (num) => {
    if (isPrime(num)) return num
    return getNextPrime(num + 1)
}



const primeMachine = (start) => {
    if (start < 2) {
        start = 2
    }
    if (isPrime(start)) {
        start = start + 1
    }
    return () => {
        let result = getNextPrime(start)
        start = result + 1
        return result
    }
}
// 소수는 ? 2부터, 자기 자신과 1로만 나눌 수 있는 숫자.
// 2는 소수인 유일한 짝수이며, 2이하는 솟수가 아님.
// 따라서 2 이하의 숫자가 입력된다면? 그 이상부터 카운터를 해 줄 필요가 있음.
// 처음 입력한 수가 소수였다면?? 합의가 있어야 하겠지만 다음 소수를 바로 출력해줄 수 있는 프로그래밍을 한다. 
// 이때 소수인지 아닌지 판별하게끔 만들 수 있는 방법이 여러가지가 있으나, 함수를 별개로 분리하여 하는 것이 쉬울 수 있다.
// 따라서 isPrime 함수를 만든다.
// 입력한 start의 숫자가 소수가 맞다면? 카운트를 하나 올려서 적용시킨다.
// return 내부의 함수는 계속 써먹을 수 있어야 한다.
// 따라서 내부 구조를 재귀적으로 짜야한다.
// 만약 내부에 return값을 재귀적으로 짜지 않는다면? 함수는 끝나버린다.
// 다음 소수를 찾는 getNextPrime 함수를 만들어준다.

// 처음 입력된 수가 소수인지 확인해야함.
// 소수라면 그 값을 출력하고 담아놓음
// 소수가 아니라면 소수가 될때까지 어떤 함수를 동작해서 소수를 만들고 그 값을 담아놓음.


const getPrime = primeMachine(10)
console.log(getPrime()); // 11
console.log(getPrime()); // 13
console.log(getPrime()); // 17
console.log(getPrime()); // 19
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());
console.log(getPrime());


