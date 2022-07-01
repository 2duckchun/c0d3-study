let num = 5

const helloTemplate = (num, i = 0, box = "") => {
    if (num === i) {
        return box
    }
    box = box + "hello"
    return helloTemplate(num, i = i + 1, box)
    }
    const template = helloTemplate(num)

    console.log(template);