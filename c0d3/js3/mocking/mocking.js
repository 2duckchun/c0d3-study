/*

Before we go into mocking, you must first accept that functions are in fact a special type of object. 
모킹으로 넘어가기전에 앞서, 우리는 함수가 스페셜한 하나의 오브젝트라는 것을 받아들여야 한다.

Since functions are actually objects, they also have properties like a regular object. 
펑션이 사실은 오브젝트이기 때문에, 그들은 또한 일반 객체처럼 프로퍼티를 가진다.

*/

const a = () => {
    a.count = (a.count || 0) + 1
    console.log(`현재 카운트는 ${a.count}입니다.`)
}
a() // 현재 카운트는 1입니다.
a() // 현재 카운트는 2입니다.
a() // 현재 카운트는 3입니다.
a() // 현재 카운트는 4입니다.
console.log(a.count) // log로 4가 찍힘

a.count = 99
a() // 현재 카운트는 100입니다.