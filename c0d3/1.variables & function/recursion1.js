/* 
In the previous section, we created functions
that return other functions that must be called again
and again to get different results.

What if instead we created a function that
only needs to call itself?
This is called recursion.

For example, say you wanted to add up all the numbers
from 1 to 999. You would need to create a variable to hold
the sum, then add 1 to the sum, add 2 to the sum...
and 999 to the sum, and then return the sum.

Let's start with a much smaller number (3) so we can
follow it through the whole process
*/

const addTo3 = (counter = 1, result = 0) => {
    if (counter > 3) {
        return result
    }
    return addTo3(counter + 1, result + counter)
}

let res = addTo3 

res = addTo3(2)

/* counter 2 > 3 is false
counter = 2 + 1, result 0 + 2
counter 3 > 3 is false
counter = 3 + 1, result 2 + 3
counter 4 > 3 is true
return result 5 
*/

res = addTo3()
/*
counter 1 > 3 is false
counter 1 + 1, result 0 + 1
counter 2 > 3 is false
counter 2 + 1, result 1 + 2
counter 3 > 3 is false
counter 3 + 1, result 3 + 3
counter 4 > 3 is true
result 6
*/

/*
When writing a function like this,
it is important to think through these steps
before coding:

What variables do i need?
We need a number that increments one at a time (1, 2, 3)
starting at 1.

When this number becomes greater than 3, we know we are done!
Let's call this variable counter.

We need a variable that stores the sum of all the numbers that
we have added up, starting at 0.
Let's call this variable result.
*/

