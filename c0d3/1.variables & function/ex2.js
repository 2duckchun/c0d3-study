/*
*/
const logFirstX = (str, num, i = 0) => {
    if (i >= num) {
        return
    }
    console.log(str[i]);
    return logFirstX(str, num, i = i + 1)
}

logFirstX('Winterfell', 5)