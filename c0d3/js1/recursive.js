const love = (count = 99) => {
    if (count <= 0) return
    console.log(`the things i do for love ${count}`)
    return love(count - 1)
}

love()