/*
Write a function named love that calls
console.log("The Things I do for love") 99 times.
*/
const love = (count = 0) => {
    if (count === 99 ) {
        return 
    }
    console.log(`${count} The Things I do for love`);
    return love(count + 1)
}
love()