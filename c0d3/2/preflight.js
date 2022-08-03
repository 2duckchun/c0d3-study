const allFuns = {}

const removeCharX = (str, num, box = "", i = 0) => {
    if (str.length === i) return box
    if (i !== num) box = box + str[i]
    return removeCharX(str, num, box, i + 1)
}

const less3Diff = (str1, str2, i = 0, count = 0) => {
    if (count > 2) return false
    if (str1.length === i) return true
    if (str1[i] !== str2[i]) {
        count += 1
    }
    return less3Diff(str1, str2, i + 1, count)
}

const reverso = (str, box = "", i = str.length - 1) => {
    if (str.length === box.length) {
        return box
    }
    return reverso(str, box + str[i], i - 1)
}

const delayAndCall = (num, f) => {
    return () => {
        setTimeout(f, num)
    }
}

const isPrime = (num) => {

}

const getNextPrime = (num) => {

}

const primeMachine = (start) => {
    if (start < 2) {
        start = 1
    }
    
    return () => {

    }
}


allFuns.removeCharX = removeCharX
allFuns.less3Diff = less3Diff
allFuns.reverso = reverso
allFuns.delayAndCall = delayAndCall

module.exports = allFuns