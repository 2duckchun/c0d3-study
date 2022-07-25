const barks = [
    [1, 2, 3],
    [2, 3, 4],
    [3, 4, 5]
];

barks[2][1] = 10 // [1, 2, 3], [2, 3, 4], [3, 10, 5]
barks[1][0] = barks[2][1] // [1, 2, 3], [10, 3, 4], [3, 10, 5]

barks[2] = () => {
    barks[0][1] = barks[0][1] + barks[0][0]
}
// [1, 2, 3], [10, 3, 4], function

barks[2]()
// [1, 3, 3], [10, 3, 4], function

barks[1] = barks[2]()
// [1, 4, 3], undefined, function

const a1 = ['string1', 'string2', 'string3'];
const a2 = [() => {}, () => {}, () => {}]
const a3 = ['string', () => {}, [19, 'quill']]
const solution = ([]) => {
    return () => {
        return []
    }
}

