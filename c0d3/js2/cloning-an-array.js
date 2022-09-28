// In the last exercise, you had to write a function that returns a new array with the same elements as the input array, 
// which means cloning the input array. If you examine the solution, you'll see that we cloned an array by using the map function:
// map에서는 새 어레이에 같은 요소들을 리턴하는 인풋 어레이를 만드는 펑션을 작성했다. 
// 이것은 인풋 어레이를 복제한다는 말과 같다.
// 우리는 map 펑션을 이용해 아래와 같이 새로운 어레이를 복제할 수 있다.

const farm = ['sheep', 'cow', 'pig']
const farm2 = farm.map((e) => {
    return e
})
console.log(farm2);

// 하지만 [...arr] 을 사용하면 더 빠르게 어레이를 클로닝할 수 있다.
const fruits = ['사과', '복숭아', '포도']
const fruits2 = [...fruits]
console.log(fruits2);

// 우리는 [...arr] 방법을 이용해 어레이들을 한꺼번에 합칠 수 도 있다.
const farmfruits = [...farm, ...fruits]
console.log(farmfruits);