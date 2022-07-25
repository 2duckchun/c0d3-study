const delayAndCall = (num, fun) => {
    return () => {
        setTimeout(fun, num);
    }
}

const fun = delayAndCall(1000, () => {
    console.log('I am groot')
})

fun();
fun();