const ages = [22, 28, 80, 48, 32]
const add5 = x => {
	return x + 5
}
const fiveYearsLater = ages.map(add5)
console.log(`ages : `, ages);
console.log(`fiveYearsLater : `, fiveYearsLater);

/*

[
    22, → add5( 22, 0, [22, 28, 80, 48, 32]) → 27,
    28, → add5( 28, 1, [22, 28, 80, 48, 32]) → 33,
    80, → add5( 80, 2, [22, 28, 80, 48, 32]) → 85,
    48, → add5( 48, 3, [22, 28, 80, 48, 32]) → 53,
    32, → add5( 32, 4, [22, 28, 80, 48, 32]) → 37
]

*/

const peppers1 = [5, 6, 6].map((element, index) => {
    return element + index
})
console.log(peppers1)

const melon = (delta, wax) => {
    return delta + wax + 1
}
const peppers2 = [5, 6, 6].map(melon).map(melon)
console.log(peppers2);
