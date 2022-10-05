/*

Notice how this method is attached to the prototype of Object. 
어떻게 메서드를 오브젝트 프로토타입에 붙일까?

Really, all we need to understand about this is that every Object instance (which is basically everything in JavaScript, since everything is an Object) has this method available to them.
사실, 이것에 대해 우리가 이해해야 할 것들은 각 오브젝트의 인스턴스는 그들이
사용할 수 있는 메서드를 가진다는 것이다.
(why? 사실 자바스크립트의 기본적인 모든 것들은 오브젝트이기 때문임)

The hasOwnProperty method allows us to check if a particular property exists ONLY on the object in context and not down the prototype chain of the object. Go here to read more on prototypes.
hasOwnProperty 메서드는허용한다. 체크할 수 있도록, 만약에 특정한 프로퍼티가
오직 오브젝트안의 컨텍스트에 있는지, 그리고 프로토타입 체인에 내려가지 않는지.
읽어보자. 프로토타입에 대해 더

Let's look at an example to see why we may use this method.
예제를 읽어보자. 보기위해, 왜 우리는 이 메서드를 쓰는지.

*/

const myObj = {
    name: 'test',
    age: 100
  }
  console.log(myObj.hasOwnProperty('name'));
  console.log(!!myObj['name']);
  console.log(myObj.hasOwnProperty('age'));
  console.log(!!myObj['name']);
  console.log(myObj.hasOwnProperty('ddd3334'));
  console.log(!!myObj['ddd3334']);
  console.log(myObj.hasOwnProperty('toStrong'), "<- 문제의 그것");
  console.log(!!myObj['toString'], "<- 문제의 그것");
   // true
   // true
  
   // true
   // true
  
   // false
   // false
  
   // false
   // true

/*
In the example above we are comparing hasOwnProperty vs just trying to use the [] notation to find a key inside of an Object. Putting !! in front just allows us to convert the value into a boolean to compare the returns values.

위의 예제에서 오브젝트 내의 키를 찾기 위해 hasOwnProperty와
[] notation을 사용해보았다.
!!을 앞단에 넣은 것은 value를 boolean 값으로 바꿔 비교해보기 위함이다.


Now, the question is why does myObj.hasOwnProperty('toString') return false but !!myObj['toString'] returns true? When you use [] notation, you are looking for any property that exists on the Object OR down that Object's prototype chain! Using .hasOwnProperty() ONLY looks at the Object's properties.

이제 문제는 myObj.hasOwnProperty('toString')이 false를 반환하고
!!myObj['toString']은 true를 반환한다는 것이다.
우리가 [] notation을 사용할때는 오브젝트에 존재하는 프로퍼티는 물론이고,
그 아랫단에 있는 prototype 사슬까지 전부 확인한다. 
hasOwnProperty는 오직 Object 내부의 프로퍼티만 확인한다. (모든 prototype까지 내려가지 않는다.)


When you start working with libraries and using Objects that have been defined somewhere else for you, you have no idea what is defined on the prototype chains. You may be able to get by with just checking properties using [] notation, but it's always better to be safe than sorry.
만약 내가 라이브러리를 사용해 일하거나, 어딘가에서 만들어 정의된 오브젝트를
사용하는 경우, 어떤 것이 프로토타입 체인에 정의되어 있는지 알 수 없다.
[] 노테이션을 사용하여 내부 프로퍼티를 찾아볼 수 있겠지만
후회하는 것 보다는 안전한 것이 낫다.

(Object.hasOwnProperty())

It is best practice to use .hasOwnProperty() in cases where you ONLY want to see if a property exists on the Object itself and not down the prototype chain.
hasOwnProperty를 쓰는 경우는 오로지 프로퍼티가 오브젝트 안에만 존재하고, prototype에는 존재하지 않는지 확인할 때
사용하는 것이 좋습니다.
*/