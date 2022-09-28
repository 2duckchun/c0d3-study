// Write a function called longest that returns the longest string out of an array of strings.
// longest라는 함수를 작성해라. 어레이에서 스트링이 가장 긴 어레이의 엘리먼트를 리턴한다.


const longest = (arr) => {
  return arr.reduce((acc, e) => {
    if (acc.length < e.length) return e
    return acc
  }, arr[0])
}


// reduce의 이너 펑션은 acc와 e를 파라미터로 함.
// acc와 e.length를 비교하며 e가 길다면 e를 리턴함
// 그 외라면 acc를 리턴함.




const b = longest(['Thor', 'Loki', 'Ant-Man', 'Rocket']) // returns "Ant-Man"

console.log(b);