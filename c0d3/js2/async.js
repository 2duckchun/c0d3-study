// In the previous chapter you learned about the asynchronous nature of JavaScript. 
// 이전 챕터에서 나는 자바스크립트 비동기 환경에 대해 배웠다.

// Here are two more examples to work through to tie this asynchronous functionality into what we've just learned about arrays and their helper functions.
// 여기에서는 2가지 예시를 줄 것이다. 비동기의 배열 속 헬퍼펑션과 관련된 펑셔널리티를 확실하게 하기 위해.

const peppers = [5, 6, 6].map((e, i) => {
  setTimeout(() => {
    console.log(e)
    return 100    
  }, 1000);  
}) // peppers는 무엇일까?
// peppers라고 할 수 있는 map의 리턴은 사실상 없다.
// setTimeout이 리턴을 받는 것이라
// 실질적으로 peppers는 undefined가 리턴된다.
console.log(peppers);

// Why do all 3 logs get printed out at once?
// 왜 3개는 한번에 프린트될까요?

// Because map runs the functions really fast and returns immediately. 
// 왜냐하면 map은 엄청나게 빠르게 return을 즉시 해버린다.

// In a race, if all runners started immediately one after another, 
// 이러한 레이스 속에 어레이의 모든 엘리먼트를 엄청빨리돌아서
// 즉시 3개의 setTimeout이 시작된다.

// they would arrive at the destination at around the same time.
// 그래서 이들은 거의 같은 시간에 다 도착해버린다.

const friends = ['Tony Stark', 'Vision', 'Ultron'].reduce((a, b) => {
    setTimeout(() => {
        console.log('Greeting', b)
    }, 2000)
    return a + b
}, '')
console.log(friends);




// 
// 
// 