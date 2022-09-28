// Let's say you have an array of people's ages: const ages = [22, 26, 80, 48, 32]

// If you want to get a new array of all the ages under 27, you can use filter! 
// 어레이에서 어떤 조건을 걸고 엘리멘트를 찾고 싶다면 filter 메서드를 사용해라.

// Filter takes a function that runs on each element in the original array to decide whether to include it in the returned array. 
// 필터는 오리지날 어레이의 각 엘리먼트 동작해서 리턴되는 어레이에 추가할지 말지 필터링하는 펑션을 파라미터로 받는다.

// If the input function returns a truthy value, the element will be in the array. 
// 만약 인풋 펑션이 truthy한 값을 리턴한다면, 엘리먼트는 어레이에 들어가게 된다.

// If the input function returns a falsey value, the element will be excluded from the array.
// 만약 인풋 펑션이 falsey한 값을 갖는다면 그 엘리멘트는 새로운 어레이에서 배제된다.

const ages = [22, 26, 80, 48, 32]
const youngerThanCardiB = ages.filter(e => {
    return e < 27
})
console.log(youngerThanCardiB);


// 아래는 filter 메서드를 직접 만들어본 케이스
const yongerThanNum = (arr, num, i = 0, result = []) => {
    if (arr.length <= i) return result
    if (arr[i] < num) {
        result.push(arr[i])
    }
    return yongerThanNum(arr, num, i + 1, result)
}
const b = yongerThanNum(ages, 27)
console.log(b);


//


const removeEmpty = (arr) => {
    return arr.filter((e) => {
      if (e !== '') return e
    })
}

const removeEmpty2 = (arr) => {
  return arr.filter((e) => {
    return e.length
  })
}

// falsey라면 새 배열에 추가 X
// truthy라면 배열에 추가 O

const h = removeEmpty(['hello', 'world', '', 'name', '', 'is'])
console.log(h);

const i = removeEmpty2(['hello', 'world', '', 'name', '', 'is'])
console.log(i);