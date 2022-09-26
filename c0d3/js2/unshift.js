// Unshift() is like push but in the opposite direction. 
// It takes in one or more elements as arguments and adds them to the beginning of the array, and returns the new array length.
// Unshift 메서드는 push 메서드와 비슷하지만, 방향이 반대이다.
// unshift 메서드는 하나 또는 그 이상의 엘리멘트를 인자로 받고, 이들을 어레이의 시작점에 추가한다. 그리고 새 배열의 길이를 리턴한다.

const nuts = ['almond', 'pistachio', 'hazelnut']
const seeds = nuts
nuts.unshift(seeds)
// nuts은?? [['almond', 'pistachio', 'hazelnut'], 'almond', 'pistachio', 'hazelnut']
// seeds는?? [['almond', 'pistachio', 'hazelnut'], 'almond', 'pistachio', 'hazelnut']

const states = ['Pennsylvania', 'New Jersey', 'Georgia']
const numStates = states.unshift('Delaware', 'New York')
// states는? ['Delaware', 'New York', 'Pensylvania', 'New Jersey', 'Georgia']
// numStates는? 5