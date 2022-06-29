/* 
Write a function named fizzbuzz that call console.log
for every number from 1 to the input number.
However, if the number is divisible by 3,
log "fizz" instead and if the number is divisible by 5,
log "buzz" instead.
if the number is divisible by both, log "fizzbuzz"
*/

/*
3과 5로 나눈게 0이라면
피즈버즈

3으로 나눈게 0이라면
피즈

5로 나눈게 0이라면
버즈

입력한 값은 값대로 두고
별도의 카운터를 하나 만들어 인수로 넣고 위로 올린다.

입력한 값과 카운터가 만나는 시점에서
아무것도 반환하지않는 리턴을 넣어 함수를 끝낸다.
*/

// const fizzbuzz = (num, count = 1) => {
//     if (num < count) {
//         return
//     }
//     if ((count % 3 === 0) && (count % 5 === 0)) {
//         console.log('fizzbuzz')
//         return fizzbuzz(num, count + 1)
//     }
//     if (count % 3 === 0) {
//         console.log('fizz')
//         return fizzbuzz(num, count + 1)
//     }
//     if (count % 5 === 0) {
//         console.log('buzz')
//         return fizzbuzz(num, count + 1)
//     }
//     console.log(count);
//     return fizzbuzz(num, count + 1)
// } 

const fizzbuzz = (num, i = 1) => {
    if (num < i) {
        return
    }
    let val = i
    if (i % 3 === 0) {
        val = 'fizz'
    }
    if (i % 5 === 0) {
        val = 'buzz'
    }
    if ((i % 3 === 0) && (i % 5 === 0)) {
        val = 'fizzbuzz'
    }
    console.log(val)
    return fizzbuzz(num, i + 1)
}

fizzbuzz(16)


/* 
전자는 매번 if마다 return값이 나오게되고
후자는 return값이 매번 나오지 않는다.
val에 필요한 return값을 저장해서 쓰기 때문이다.
파이프라인처럼 필요한 연산들을 거치게해서 최종적으로 값을 산출하는 것과
그때그때 필터처럼 값을 뽑아 산출해내는 것의 차이이다.
*/