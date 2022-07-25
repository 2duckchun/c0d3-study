/*
Writing A Recursive Function
Let's recap the steps for writing a recursive function:

1. Parameters : Figure out what variables you need, add them to your function
as parameters, and give them a default value.

2. Base case : Write an if condition telling your function when to stop
and exit.

3. Recursive case : Write logic for the next iteration.
*/

/*
Write a function named sumToMe that takes in a number and returns
the sum of all numbers from 0 to that number.
*/

const sumToMe = (num, sum = 0) => {
    if (num <= 0) {
        return sum
    }
    return sumToMe(num - 1, sum + num)
}

const res = sumToMe(5)
console.log(res);

/* 
This will be similar to our addTo3 example above.
but now instead of counting up to a fixed number,
we will count down from whatever number is passed in.

1. Parameters : in addition to the required parameter,
we need a variable to keep track of the sum.
Let's call this variable sum.
sum should start with a default value of 0.

2. Base case : When we've counted down to 0,
there are no numbers left to add so we should stop and return
the result that we have collected:
if (input <= 0) return sum.

We write input <= 0 in our check just in case someone used our function
incorrectly by passing in a negative number.
For instance : sumToMe(-3)

3. Recursive case : The rest of the logic is simple:
at each step we just add the current number to the result and
decrease the number.
*/


