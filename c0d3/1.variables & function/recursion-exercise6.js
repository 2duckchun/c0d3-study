/*
Write a function named sumEvens that adds up all the positive
even numbers from 2 to the given number.
(Use % to determine if each number is even)
*/

/*
함수에 숫자를 인수로 받는다. 짝수를 합한 값을 저장하는 파라미터도 만든다.
인수로 받은 숫자를 기준으로 -1씩 카운트되며
짝수라면 그 값을 더해 파라미터에 저장한다.
인수 카운터가 0이되면 함수를 마무리하고 값을 저장한 박스를 출력 리턴한다.
*/
const sumEvens = (num, box = 0) => {
    if (num === 0) {
        return console.log(box);
    }
    if (num % 2 === 0) {
        return sumEvens(num - 1, box = box + num)
    }
    return sumEvens(num - 1, box)
}
let result = sumEvens(10)