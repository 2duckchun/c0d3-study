// The Push() method takes one or more elements as arguments and adds them to the end of an array. Push() returns the new length of the array.
// push 메서드는 하나 또는 그 이상의 엘리먼트를 인수로 받고, 이들을 배열의 끝에 넣어준다. push()는 배열의 새로운 길이를 리턴한다.

const apples = ['fuji', 'gala']
const trees = apples.push('pink lady', 'washington')
console.log(apples); // apples = 푸지, 갈라, 핑크레이디, 워싱턴
console.log(trees); // 4

const peaches = [4, 8, 12]
const plums = peaches
peaches.push(plums)
// peaches는 뭘까? - [4, 8, 12, [4, 8, 12]]
// plums는 뭘까? - [4, 8, 12, [4, 8, 12]]

plums[0] = 47
// peaches는 뭘까? [47, 8, 12, [47, 8, 12]]
// plums는 뭘까? [47, 8, 12, [47, 8, 12]]

peaches[3][1] = 39
// peaches는 뭘까? 
// plums는 뭘까?  // [47, 39, 12, [47, 39, 12]]

let nectarines = [1, 2, 3]
nectarines = nectarines.push(6) // 4