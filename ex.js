const parse = (str, i = 0, box="") => {
    if (i >= str.length) {
        return box
    }
    box = box + `<h1>str[i]</h1>`
    return parse(str, i = i + 1, box)
}

let str = "kimtaesoo"

const a = parse(str)

console.log(a);