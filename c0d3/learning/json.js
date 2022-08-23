// const a = []
// a.push(a)
// const b = JSON.stringify(a)
// 순환 구조를 가진 데이터는 stringify 과정에서 오류가 남


// const c = [() => {}]
// JSON.stringify(c)
// 데이터 배열 내에 함수가 있으면 stringified 불가


const arr = [-18, 'Charizard', true]

const strArr = JSON.stringify(arr) 
console.log(strArr)

const newArr = JSON.parse(strArr)
console.log(newArr)

const isSame = arr === newArr
console.log(isSame)