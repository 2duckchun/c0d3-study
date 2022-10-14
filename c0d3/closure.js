// 클로저가 외부함수
// 안에 있는 return () => {} 얘가 내부함수
// 클로저란?
// 외부함수의 생명주기가 끝 났음에도 불구하고
// 변수를 참조할 수 있는 현상 - 클로저

const closure = () => {
    let 태수 = 0
    return () => {
        let 석우 = 0
        태수 = 태수 + 1
        console.log(태수);
        return () => {
            석우 = 석우 + 1
            return 석우
        }
    }
}

const 구글 = closure()
console.log(구글()); // 태수: 1 리턴된건 : 함수
console.log(구글()); // 태수: 2 리턴된건 : 함수
console.log(구글()); // 태수: 3 리턴된건 : 함수
console.log(구글()); // 태수: 4 리턴된건 : 함수
console.log(구글()()); //
console.log(구글()()); //
console.log(구글);


const a = [1, 2, 3]  //


function 함수(파라미터) {
    파라미터 = [1, 2, 3]
    return 파라미터
}

함수(a)
console.log(함수(a) === a);