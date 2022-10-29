const abc = (a, b) => {
    let c = a + b
}
const arr =[{fun: () => {console.log('안녕')}}, () => {console.log('하세요')}, 5]
const aw = arr[1]()
console.log(aw);








// const closure = () => {
//     let i = 0
//     return () => {
//         i = i + 1
//         return i
//     }
// }

// const elsa = closure()
// const anna = closure() 
// // 클로저가 리턴을 해버린 순간 closure는 메모리에서 사라져요.
// // 근데 얘가 가진 i라는 변수는 얘의 자식인 익명함수가 계속 참조를 합니다.
// // 이때, closure라는 함수는 메모리에서 지워지지만.... i라는 변수는 따로 살아있는 거에요.
// // 계속 i를 참조가 가능하다.
// elsa() // 1
// anna() // 1
// elsa() // 2
// elsa() // 3
// const b = elsa() // 4 
// const a = anna() // 2 
// console.log(b + a)