const baratheon = run_me => {
    return run_me() + 5
}

const tyrell = () => {
    return 10
}

let res = tyrell

res = baratheon(tyrell)
res = baratheon(() => {
    return 92
}, 3) // 5

res = baratheon(() => {
    const b = 95
    tyrell()
})