/* 
클로저의 컨셉은 각각의 값들이 각자의 트랙에
유지되게 하는 것에 있다.

내부 함수는 언제나 외부 함수의 파라미터나 변수에
접속할 수 있다. 외부함수가 실행이 되었을때도 불구하고.
*/

const solution = (a, b) => {
    return c => {
        return a + b + c
    }
}

const fun1 = solution(1, 2)
// Even though solution has finished running,
// the a and b parameters still exist
// a -> 1, b -> 2

let res = fun1(3) // 6
res = fun1(5) // 8
res = solution(2, 3)(9) // 14

/*
위 예제에서 어떻게 fun1이
arguments a와 b를 알고있을지에 대해 주목해라.
부모 함수인 solution에 기반해서 넘어와있다.
*/

