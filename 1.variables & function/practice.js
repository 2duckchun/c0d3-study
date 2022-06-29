const baratheon = run_me => {
    return rum_me() + 5
}
const tyrell = () => {
    return 10
}

let res = tyrell // function tyrell

res = baratheon(tyrell) // 15

res = baratheon(() => {
    return 92
}, 3) // 97

res = baratheon(() => {
    const b = 95
    tyrell()
}) 
/* res has NaN (Not a Number)
(undefined + 5 will be shown as NaN, Not a Number)
BEWARE! This error happens all the time, so be careful
if a function has no return value, it will return undefined
no matter what the function inside it returned.
*/