/*
Now that we've learned some fundamentals of CSS and HTML layout, 
we'll turn our attention back to JavaScript to learn a powerful new way of creating objects.
우리는 CSS와 HTML의 기초에 대해 학습했다.
이제는 다시 자바스크립트에 돌아와, 오브젝트를 생성하는 파워풀한 방법에 대해 학습해보도록 하자.

In the last lesson, we learned about how to create a simple object using {}. 
We had to create each object from scratch. 
As our programs get more complex, we'll need a way of making templates that let us quickly create multiple, 
similar objects. 
이 전 레슨에서, 우리들은 오브젝트르 {}를 이용하여 만드는 방법에 대해 배웠다.
우리는 오브젝트를 첫 단계부터 만들어야 했었다.
허나 우리 프로그램이 점점 복잡해지면서, 
우리는 비슷한 객체들을 빠르게 찍어낼 수 있는 템플릿 기법에 대해 배워야할 필요가 있게 되었다.

These are called classes (no relation to HTML classes). 
Just like how you follow a blueprint to build a house, you use a class to create an object.
그 템플릿들을 우리는 class라고 부른다. (HTML의 클래스랑은 연관없다.)
집을 짓기 위해 설계도를 사용하는 것 처럼, 클래스를 사용하여 오브젝트를 생성하는 것이다.

In this lesson, we will learn how to create a class using function, 
and then use the keyword new to create an object from the class.
이번 레슨에서 함수를 이용해서 어떻게 클래스를 만드는지 배울 것이고,
클래스를 통해 오브젝트를 만들기 위해서 new 키워드를 사용해 볼 것이다.

Objects are heavily used in games. 
When logic is complex, we use detailed objects to simplify the code.
오브젝트는 게임에서 아주 많~이 사용된다.
로직이 복잡해지면, 코드를 심플하게 만들기위해 객체를 디테일한 오브젝트를 사용한다.
*/

/*
This game might use a "character" object to give every character certain properties 
(life counter, for example) and functions (such as attack and move).
게임에서는 각 캐릭터에 각각의 프로퍼티와 기능(함수; 공격, 이동)을 주기 위해 캐릭터 오브젝트라는 것을 사용할 것이다. 

After each character is created, it can be customized to have different properties or functions 
from the other characters (clothing, defense mechanism, etc.)
각각의 캐릭터가 생성된 후에, 각각의 캐릭터마다 다른 프로퍼티나 기능을 가지기 위해 커스터마이즈드가 되어야 할 것이다. 
(옷, 방어 메커니즘 등)

To define a class, we simply write a function using the function keyword. 
This function can take in arguments to help create the object.
클래스를 정의하기 위해, 우리는 키워드 펑션을 이용해서 간단하게 함수를 작성할 것이다.
이 펑션은 오브젝트를 생성하기위해 아규먼트를 받을 수 있게 된다.
*/

function Soldier (name, age) {
    this.age = age

    let life = 100
    this.getName = () => {
        return name
    }
    this.getLife = () => {
        return life
    }
    this.getHurt = () => {
        if (age > 25) {
            life = life - 10
        }
        life = life - 10
    }
}

/* 
To create an object from the class, you run the function with the keyword new in front. 
You can create as many objects as you want.
클래스로 오브젝트를 생성하기 위해, new 키워드를 함수와 함께 사용해야 한다.
그렇게 하면 많은 오브젝트를 원하는대로 생성할 수 있다.
*/

const a = new Soldier('2DC', 30)
const b = new Soldier('장희수', 28)
const c = new Soldier('김주열', 24)

a.age // 20
a.age // 11
a.age // 40

a.getLife() // returns 100
c.getName() // 김주열

b.getHurt()
b.getLife()

/*
Notice how we used a few different methods of setting variables in the Soldier class.
솔저 클래스의 변수를 제어하기위해 몇가지 메서드를 사용한 것을 확인해보아라.

For age we set this.age to age (argument), which makes the variable directly accessible. 
age를 this를 이용하여 선언한 것에 우리는 직접적으로 엑세스가 가능하다.

If this were a game in a web application, 
the player could type this.age on the console to find or even modify the Soldier's age.
만약 이게 게임 어플리케이션이었다면,
플레이어가 콘솔창에 this.age를 칠 수 있고, solider의 나이를 조절할 수 있다.

For life we used let along with getter and setter functions.
우리가 life를 직접적으로 사용하려면, getter와 setter 펑션을 사용해야 한다.

Usually, you don't want to set properties to this in an object, 
especially if they contain sensitive data. 
일반 적으로 민감한 데이터를 포함하는 경우, 우리는 오브젝트에 프로퍼티를 넣어놓고 싶지 않을 것이다.

Otherwise the player could write a.life = 1000 in the console to give themselves more lives!
그렇지않으면, ㅍ르레이어가 a.life = 1000 이라는 식으로 해서 그들의 라이프를 수정해버릴 것이다.

We didn't need to explicitly set name, 
because it's an argument and will be available as long as each Solider lives (closure).


*/