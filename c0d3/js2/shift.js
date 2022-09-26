// Shift() is like pop() but in the opposite direction. It removes the first element in the array and returns the removed element. It returns undefined if the array is empty.
// shift 메서드는 pop과 비슷한데 방향이 반대편이다. 이것은 어레이의 첫번째 요소를 삭제하고, 삭제된 요소를 리턴한다. 어레이가 빈 것이었다면 undefined를 리턴한다.

const states = ['Delaware', 'Missouri', 'Hawaii']
const firstState = states.shift()
// firstState는 'Delaware'이다.
// states는 ['Missouri', 'Hawaii'] 이다.

const nuts = ['almond', 'pistachio', 'hazelnut']
const seeds = nuts
const drupe = nuts.shift()

// nut은? ['pistachio', 'hazelnut']
// seeds는? nut의 주소를 참조함 (근데 nut도 결국에는 참조형이라 두 값은 결국 같음.)
// drupe = 'almond' 