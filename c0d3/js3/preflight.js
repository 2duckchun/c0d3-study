// Write a function called mergeArrays that combines two arrays into one.
// 펑션을 작성해라. 2개의 어레이를 하나로 합치는
const mergeArrays = (arr1, arr2) => {
    return [...arr1, ...arr2]
}
/// ...array 문법을 통해 어레이 엘리멘트를 다 뿌려서 합쳐볼 수 있따.
const b = mergeArrays(['Rattata', 'Raticate'], ['Bulbasaur', 'Ivysaur', 'Venusaur'])
console.log(b);

// Write a function called firstLongerThan that finds the first string in an array longer than the given number.
// firstLongerThan이라는 어레이 내에서 문자열의 길이가 주어진 숫자보다 큰 첫번째 스트링을 찾는 펑션을 작성해라. 

const firstLongerThan = (arr, num) => {
    return arr.find((e) => {
        return e.length > num
    })
}
// find 헬퍼 펑션은 내부 펑션을 파라미터로 받고, 달려있는 배열의 엘리먼트를 전부 순회한다.
// 만약 return이 true라면, find는 그 e를 반환한다.

const c = firstLongerThan(['Ekans', 'Arbok', 'Pikachu', 'Raichu'], 5) // returns "Pikachu"
console.log(c);


// Write a function called getReturnValues that takes in an array of functions,
// and returns an array of values returned by the functions.
// getReturnValues라는 함수를 작성해라. 이것은 펑션으로 이루어진 어레이를 받는다.
// 그리고 펑션의 리턴값을 어레이로 만들어서 리턴해라.

const getReturnValues = (arr) => {
    return arr.map((e) => {
        return e()
    })
}
// map 헬퍼펑션은 연결된 배열의 내부요소를 하나씩 돌아
// 같은 길이의 어레이를 리턴한다.
// 내부를 순회하며 새로운 배열에 return값이 push된다.

const getReturnValues1 = (arr, i = 0, result = []) => {
    if (arr.length <= i) return result
    result.push(arr[i]())
    return getReturnValues(arr, i + 1, result)
}

const o = getReturnValues([
    () => {
      return 25
    },
    () => {
      return 29
    },
    () => {
      return 'Pikachu'
    }
  ]) // returns [25, 29, "Pikachu"]
console.log(o);

// Write a function called zeroSquare that takes in a number, 
// and returns a square two-dimensional array with the input number rows and columns filled with zeros.
// 제로스퀘어라는 펑션을 작성하라. 숫자를 인수로 받고, 2차원의 어레이를 리턴한다.
// 로우와 컬럼에 따라 0이 채워진다.


const fill_zero = (num, z = 0, mini = []) => {
    if (num <= z) return mini
    mini.push(0)
    return fill_zero(num, z + 1, mini)
}

const zeroSquare = (num, i = 0, result = []) => {
    if (num <= i) return result
    result.push(fill_zero(num))
    return zeroSquare(num, i + 1, result)
}

// This one won't be able to use the array helper functions we've learned so far—think recursion! 
// 이것은 어레이 헬퍼 펑션을 쓸 수 없고, 리커전으로 깊게 생각해야한다.
// Because we're dealing with a multi-dimensional array, your recursive function will need to pass
// 이것은 멀티 차원의 어레이를 처리해야하고, 리커시브 펑션이 필요하다.
// around more than just one iterator or counter variable, and possibly more than one results array.
// 하나의 이터레이터나 카운터 변수 이상이 필요하다. 그리고 가능하다면 리설트 어레이가 하나 더 필요하다.

// Here's our first experience with using multiple iterators (engineers often call them i and j, or you could call them row and col) to navigate a 2D array. 
// 이것은 멀티플 이터레이터를 사용했떤 나의 첫번째 경험이다.
// 엔지니어는 보통 i와 j를 이용ㅇ한다. row와 col을 사용해서 2D array를 만들기 위해.

// There are multiple ways you could have done this, so don’t worry if yours doesn’t look quite like this. In this method, j keeps track of which row we're in, while i goes along the columns.
// 이것을 완성시키기 위한 방법은 여러가지가 있겠으나, 잘 안보여도 걱정하지는 마라.
// 

// The function increments i until each row fills up (this is sort of like a first "base case"), then pushes a new row and increments j to move down. 
// When j reaches num, we've filled all the rows in all the columns. This is the final base case when we return the square array.

const f = zeroSquare(5) // returns [[0,0], [0,0]]
console.log(f);