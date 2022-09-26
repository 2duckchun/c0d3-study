// Pop() method removes the last element in an array and returns the removed element.
// If the array is empty, undefined is returned.
// Pop 메서드는 어레이의 마지막 엘리먼트를 삭제하고, 그 삭제된 엘리먼트를 리턴한다.
// 만약 어레이가 비었다면, undefined가 리턴된다.

const states = ['Delaware', 'Missouri', 'Hawaii']
const lastState = states.pop()
// lastState는 '하와이'가되고, states는 ['델라웨어', '미저리']가 된다.

const nuts = ['아몬드', '피스타치오', '헤이즐넛']
const seeds = nuts
const nutella = nuts.pop()

// nutella : '헤이즐넛'
// seeds = ['아몬드', '피스타치오']
// nuts = ['아몬드', '피스타치오']