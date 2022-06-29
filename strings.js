const logString = (str, i = 0) => {
    if (i >= str.length ) {
        return
    }
    console.log(str[i]);
    return logString(str, i + 1)
}

console.log(logString('hello'))

/*

We need a variable (let's say i) that starts at 0 and keeps
track of where we are in str

When we arrive at the end (i is equal to str.length), return.
Console.log str[i]
Continue

*/
