const add1 = (x = 3, y = 2) => {
    return x + y + 1
}

let res = add1() // 6

res = add1(1) + add1() + add1(5,5) // 18
res = add1(5) === add1(2, 3) + 2 // true