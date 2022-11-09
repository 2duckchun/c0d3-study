/*
This section will give you a few examples and best practices of how to use JavaScript to change the appearance of an element.
이 섹션은 몇가지 예시를 줄 것이다. 그리고 최고의 연습을 줄 것이다.
자바스크립트로 어떻게 엘리먼트의 외형을 바꾸는지.
*/

/*
The best practice way to change an element's appearance is to add and remove classes. 
Every element has a property called classList that contains functions that lets you manipulate its classes.
엘레멘트 외형을 바꾸는 가장 좋은 방법은 클래스를 더하거나 뺴는 방법이다.
모든 엘리먼트는 클래스를 변형할 수 있는 함수를 가진 classList라는 프로퍼티를 가지고 있다.

클래스를 변형하기 위한 3개의 함수는 다음과 같다.
1. contains은 문자열 파라미터를 받으며, 엘리먼트가 해당 class를 가지고 있냐 없냐 여부로 참/거짓을 반환한다.
2. add는 문자열을 파라미터로 가지며, 클래스에 엘리먼트를 새로이 붙인다.
3. remove는 문자열을 파라미터로 가지며, 엘레멘트로부터 해당 클래스를 삭제한다.
*/