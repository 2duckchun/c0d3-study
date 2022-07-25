/*
*/

/*
num의 인수만큼 count를 올려서 같아지면
종료 리턴.
같지 않다면 fun1을 실행하고 count를 올림

*/


const fun1 = (num, func) => {
    if (num <= 0) {
        return
    }
    func()
    return fun1(num - 1, func)
}

fun1(10, () => {
    console.log('hello')
})