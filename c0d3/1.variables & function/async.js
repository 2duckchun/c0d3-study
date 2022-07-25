// let points = 2
// setTimeout(() => {
//     console.log(points); // will console.log be called?
// }, 1000)
// points = 10

/*
No.
Since JS does not wait around, points = 10 executes before
the callback function
*/

// -------

/* Write a function named wait20 that waits 20 seconds and then calls */
// console.log("one").
// const wait2 = setTimeout(() => {
//     console.log("one");
// }, 2000)
// wait2;

// const wait3 = () => {setTimeout(() => {
//     console.log("two")
// }, 3000)}
// wait3()


/*
Write a function named oneAndTwo that waits 20 seconds and then calls
console.log("one"), then waits another 10 seconds and then calls
console.log("two").
*/
const oneAndTwo = () => {
    setTimeout(() => {
        console.log("one");
        setTimeout(() => {
            console.log("two");
        }, 10 * 1000)
    }, 20 * 1000)
}
oneAndTwo();

/*
Write a function that takes in a string,
and calls console.log for every character in the string,
1 second after each call (aka 1 character per second)
*/

/*
함수 끝 : str.length와 i와 같아지는 때
내용 : 인덱스가 하나씩 돌아가면서 str을 불러낸다.
불러낸 후 func에 인덱스 하나 추가해서 다시 돌린다.
*/

const func = (str, i = 0) => {
    if (i === str.length) {
        return
    }
    setTimeout(() => {
        console.log(str[i]);
        return func(str, i = i + 1)
    }, 1000)
}

func("C0D3")