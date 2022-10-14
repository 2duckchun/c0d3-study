/* In reality, an array is actually an object, with special status (you can use numbers as keys, etc). 
현실에서는, 어레이도 키를 숫자로 갖는 특수한 형태의 오브젝트이다. 
You can add keys and values to arrays! 
어레이에 키와 밸류를 넣을 수 있다.
The following examples are for teaching purposes only—treating arrays as objects is not a good idea, 
as it will confuse other engineers on your team. 
아래 예시에서는 객체로써만 어레이를 다루는 것이 좋은 아이디어가 아니라는 것과,
이것이 팀의 동료들을 어지럽게 한다는 것을 알려줄 것이다.
*/

const a = [9, 8, 7, 5]
a.name = 'Tony Stark'
console.log(a);