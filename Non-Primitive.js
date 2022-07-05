/*
The value of a primitive data type variable
can only contain a single thing
(be it a string or number or whatever)
*/

// Primitive data types are known as being
// immutable data types
// because there is no way to change a primitive
// value once it gets created.
let string1 = 'this is a string'
string1[1] = 'X'
console.log(string1) // 'this is a string'
console.log(string1[1]); // 'h'
// value of string1 cannot be changed
string1 = 'xyz'
console.log(string1) // 'xyz'
string1[1] = 'X'
console.log(string1[1]); // y
// value of string1 has been totally replaced by 'xyz'
// here, a new copy of string1 is created with value 'xyz'
// and variable string1 gets reassigned to a new reference.

// 배열은 비원시적 데이터 타입이다.
// 변수에 배열을 할당할 때, 변수는 배열 데이터의 주소를 저장한다. 데이터를 직접 저장하지 않는다.
/* This concept actually exists in real life for the same reasons.
(primitive) - When someone gives you cash, you get the money itself
(non-primitive) - When someone sells you their house, you get a deed
with your name and the address of the house on it, and you also get the keys
to the house. The deed states that you are the owner of the actual house.

In real life, we use addresses when dealing with houses because they are not easily portable.
Similarly, addresses are needed for non-primitive data types because they tend to be large and therefore cannot move around easily.
At work, it is very common for software engineers to work with arrays with thousands of elements.
*/

const a = [1, 2, 3];
const b = [
    false,
    'spiderman',
    (a, b) => {
        return a - b
    }
];

// 컴퓨터가 위의 코드를 볼 때 어떻게 행동할지 하나하나 분석해보자.
/*
컴퓨터는 [1, 2, 3]을 보게되고, 이들은 메모리 빈공간에 들어간다.
컴퓨터가 데이터를 메모리에 저장하면 더이상 크나큰 어레이를 찾아다닐 필요가 없다.
그저 그 어레이가 담긴 주소만을 찾으면 된다.
따라서 a는 [1, 2, 3]이 담긴 주소를 저장한다. (reference)

b 역시 마찬가지로 저 길다란 배열들을 담을 메모리를 찾는다.
(다만 저 배열의 크기는 a가 참조하는 주소의 배열 데이터와는 용량이 다르다.)
따라서 b 역시 저 배열들을 저장한 주소를 참조하게 된다.
*/

const a1 = [1, 2, 3];
const b1 = [1, 2, 3];
const c1 = a === b // c1은 false이다. a1이 참조하는 주소와 b1이 참조하는 주소가 다르기 때문.
console.log(c1);

const a2 = [1, 2, 3] === [1, 2, 3] // 여전히 false다.
// 컴퓨터는 배열 2개를 만들었다. 둘은 다른 주소를 가지고 있다.
console.log(a2);

//Variable Declarations
const musicians = [1, 2, 3, 4]
// Since arrays are non-primitive data,
// musicians contains the address to the musicians array data.

musicians[0] = 'Mozart'
musicians[1] = 'Beethoven'
musicians[2] = 'Liszt'
musicians[3] = 'Chopin'

// the data changed, but `musicians` itself contains an address.
// the address stayed the same.
// For all non-primitive data, you should always declare them with a
// const because their address does not change.

console.log(musicians);