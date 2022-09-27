// Write a function named copyLast that copies an array but leaves out a given number of elements at the front.
// copyLast라는 펑션을 작성해라. 이 펑션은 인수로 주어진 숫자만큼의 엘리먼트를 제외하고 새로운 어레이를 만든다. 


const copyLast = (arr, num, i = 0, result = []) => {
    if (arr.length <= i) return result
    if (i >= num) {
        result.push(arr[i])
    }
    return copyLast(arr, num, i + 1, result)
}

// arr.length와 i가 같아지면 result를 return한다.
// i가 num보다 작으면, result에 push하지 않고 재귀한다.
// i가 num보다 작지않다면, result에 push하고 재귀한다.
// 즉 ...


const b = copyLast(['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk'], 2)
// ["Captain", "Black Widow", "Hulk"]
console.log(b);