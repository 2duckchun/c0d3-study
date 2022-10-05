// This function takes in an object and returns an array of keys in the object.
// 이 펑션은 오브젝트를 인수로 받고, 오브젝트의 키를 어레이 형태로 반환한다.

const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulf: 'strong'
}

const result = Object.keys(info)
console.log(result);

/*
Why isn't it info.keys()?
왜 info.keys() 처럼 사용하지 않아요?

Most of the helper functions for Object are static functions rather than the prototype functions we learned about for arrays.
대부분의 오브젝트와 관련된 헬퍼 펑션은 정적 함수입니다. 어레이에서 배웠던
프로토타입 펑션과는 다르죠.

One reason is that objects provide more opportunities for key collisions—for example your object could have a key called keys or values.
그 이유 중 하나는 오브젝트는 key와 function이 겹칠 수 있는 우려가 존재합니다.
메서드와 key 값이 같다면 메서드 실행이 아니라 밸류가 출력되겠지요.

*/