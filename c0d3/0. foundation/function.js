// A function is a set of instructions written to perform a specific task.
let greet = new Function('a', 'b', "return a + ' say, hello ' + b")
let say = greet('JY', 'TS')

/*
Parameters: Variables to hold the data when function run 
Run: Running a function means to execute it by adding a () to the end.
Argument: Data you pass into the function when you run a function. Goes in between ()
Function body: Code that runs when a function is run. *NOTICE* how the function
body is a string. After the Function Object s created, the string is converted into
JS code. in the example above, the code looks like the follwing:
return a + ' says, hello ' + b
Return: The result of running the function. if the key word return is not in your function
body, the function will automatically return undefined.
*/

greet = function(a, b) {
    return a + ' say, hello ' + b
}

let secret = new Function('a', 'b', 'a = a + 9; return a + b')
secret = function(a, b) {
    a = a + 9;
    return a + b
}



// Function Return

/* When JS reaches a return statement, the function will stop executing,
return the returned value, and exit the function.

if the function was called from a statement,
JS will return to the calling statement and continue
to execute the next statement. 
Any return value will be passed to the caling statement.
*/

const sum = function (a, b) {
    return a + b // function returns the sum of a and b
    const c = a - b // this statement will NEVER be executed.
}

const x = sum(4, 3) // function sum is called,
// return value will be assigned to variable x.