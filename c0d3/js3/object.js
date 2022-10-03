/* Objects are the most important concept in JavaScript. But wait, didn't we already say that functions are the most important concept in JavaScript?! Yes we did. But functions are actually objects in JavaScript (and so are arrays)! In fact, almost everything in JavaScript is an object.

Like arrays, objects can store a wide variety of data.
어레이처럼, 오브젝트도 다양한 데이터를 저장할 수 있다.
We can imagine that an array is like a locker room where each locker has a number.
우리는 어레이가 락커룸이며 락커마다 번호가 달려있는 것이라고 생각해볼 수 있다.

When you look into the locker, there could be anything in there. 
락커 안을 보면 거기안에는 어떤 것이든 있을 수 있다.

But with objects, each locker can have a string label.
오브젲ㄱ트는 락커는 맞는데 넘버링이 아닌 스트링 라벨이 달린 락커라고 보면 되겠다.

Wouldn't it be better if your locker simply had your name instead of a number you had to memorize?
락커에 번호보다는 이름이 달린게 기억하기 더 편할 수 있겠죠?

The label is called a key and the locker content is called the value.
이때 라벨은 'key'라고 불리우며, 락커 컨텐츠는 'value'라고 불리운다.

To create an object you use {}.
object를 생성할때는 {}를 쓴다. */

const student1 = {
    first: 'Harry',
    last: 'Potter',
    age: 25
}
const student2 = {
    first: 'Ron',
    last: 'Weasley',
    age: 24
}

const total = student1.age + student2.age // total is 49

/* In the example above, we created 2 student objects:
위의 예제를 보면, 우리는 2개의 오브젝트를 만들었다.

The first object has 3 keys, first, last, and age, and 3 corresponding values, "Harry", "Potter", and 25.
첫번째 오브젝트는 3개의 키가 있다.('first', 'last', age)/ 그리고 상응하는 3개의 values가 있다. ('Harry', 'Potter', 25)

The second object has the same keys as student1 and corresponding values "Ron", "Weasley", and 24.
두번째 오브젝트는 student1과 같은 키를 가지고 있으며, 상응하는 값이 ('Ron', 'Weasley', 24) 있다.

Then, we used total to show you how to access a value associated with a key. 
그 후, 어떻게 value에 따른 key에 접속할 수 있는지 보기 위해 total을 할 것이다.

This notation might look familiar; it turns out that by this point, you have used many objects already. 
이 표기법은 굉장히 익숙해보인다. 이 시점에서, 우리는 많은 오브젝트를 이미 쓰고 있었다.
*/


/*
  console.log('hello')
  console is an object created by an engineer for you to use.
  console은 엔지니어가 우리가 사용하기 편하도록 미리 만들어놓은 오브젝트이다. 
  
  console has a key called log, and the value at that key is a function.
  콘솔은 log라는 key를 가지고 있고, key에 상응하는 value로는 펑션이 있다.

  console.log("hello") runs the function that is stored in the console object under the key "log".
  따라서 console.log("hello")는 console이라는 객체의 key log에 저장된 함수로 동작한다. 
*/

// const console2 = {
//     log: data => {
//         alert(data)
//     }
// // }

// console2.log('hello')
// console2.log('World')

/*

document.querySelector
 - document is an object created by an engineer for you to use.
    document는 엔지니어가 나 쓰라고 만들어준 오브젝트이다.
 - document has a key called querySelector, and the value of that key is a function.
    document는 querySelector라는 키를 가지고 있다. 그리고 value로는 펑션을 기지고 있다.
 - document.querySelector('.submit') runs the function that is stored in the document object under the key querySelector.
    document.querySelector('.submit)은 document 오브젝트의 key인 querySelector가 저장하고 있는 펑션이 실행되는 것이다.

 localStorage.getItem
 - localStorage is an object created by an engineer for you to use.
    localStorage는 엔지니어가 나 쓰라고 만들어준 오브젝트이다.
 - localStorage has a key called getItem, and the value of that key is a function.
    localStorage는 getItem이라는 키를 가지고 있고, 상응하는 value에 펑션을 가지고 있다.
 - localStorage.getItem('mydata') runs the function that is stored in the localStorage object under the key getItem.
    localStorage.getItem('mydata')는 localStorage라는 오브젝트의 key인 getItem을 실행하여 상응하는 value의 펑션을 실행시키는 것이다.
*/

const object1 = {
    key1 : 'hello i am key1',
    key2 : 'world',
    key3 : () => {
    console.log(object1.key1)
    return 3
    }
}

console.log(object1.key3());