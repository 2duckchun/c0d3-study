/*
Write a function named numberedHello
that returns a string with the same number of
"hello" as a given number.
*/

/*
처음에 입력한 인수는 계속 사용하면서
비교할 인덱스 파라미터를 하나 만든다.
클로저 or 실행컨텍스트의 영역에 hello를 담을 수 있는
상자를 하나 만든다.
인수와 인덱스를 비교하면서 hello를 하나씩 쌓는다.
인덱스가 인수보다 값이 커진다면
재귀를 종료하고 박스를 return한다.
*/
// let box = ""
// const numberedHello = (num, i = 0) => {
//     if (num <= i) {
//         return console.log(box)
//     }
//     box = box + "hello"
//     return numberedHello(num, i + 1)
// }

// numberedHello(5)

/*
hello는 재귀함수의 인수에 저장을 한다. (박스라고 하자.)
num은 하나씩 깎아가며 재귀를 돌리고, 재귀함수 인수에 hello는 하나씩 추가하자.
num이 0이 될 경우 함수를 종료한다.
5를 입력할 경우 5, 4, 3, 2, 1 총 5개가 나와야하며, 0이 카운트되면 6이 되기 때문이다.
*/

const numberedHello = (num, box = "") => {
    if (num === 0) {
        return console.log(box);
    }
    return numberedHello(num - 1, box = box + 'hello')
}
numberedHello(10)