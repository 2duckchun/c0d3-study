const solution = (str, i = 0) => {
    if (str.length <= i) return
    console.log(str[i])
    return solution(str, i + 1)
}

solution('hello')