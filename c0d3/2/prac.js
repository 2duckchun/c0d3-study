const makeHello = (num, i = 1, result = "") => {
    if (num < i) return result
    if (i % 5 === 0) {
        result = result + "hello " + "</br>"
        return makeHello(num, i + 1, result)
    }
    return makeHello(num, i + 1, result + "hello ")
    }

    const b = makeHello(11)
    console.log(b);