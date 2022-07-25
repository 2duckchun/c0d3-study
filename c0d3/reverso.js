const test = {}

const reverso = (str, i = str.length - 1, result = "") => {
    if (i < 0) {
        return result
    }
    result = result + str[i]
    return reverso(str, i = i - 1, result)
}

const b = reverso('가나다라')
console.log(b);

test.reverso = reverso
module.exports = test