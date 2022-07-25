const countToMe = (num, i = 8) => {
    if (num < i) {
        return
    }
    console.log(i);
    return countToMe(num, i + 1)
}

countToMe(10)

// 8
// 9
// 10