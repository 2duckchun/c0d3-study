const getChat = () => {
    const result = ""
    return (value) => {
        result = result + `<h1>${value}</h1>`
        return result
    }
}

const a = getChat()

a("안녕하세여")
a("안녕하세여")
console.log(a);