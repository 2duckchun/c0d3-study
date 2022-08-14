const peppers = [5, 6, 6].map((element, index) => {
    setTimeout(() => {
        console.log(element)
        return 100
    }, 1000);
})

/*
5
6
6
*/

/* 

*/