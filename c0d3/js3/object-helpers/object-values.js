// This function takes in an object and returns an array of values in the object.
// 이 펑션은 오브젝트를 받아 오브젝트 내의 value를 어레이화해서 리턴한다.

const info = {
    ironman: 'arrogant',
    spiderman: 'naive',
    hulk: 'strong'
}

const result = Object.values(info)
console.log(result);
