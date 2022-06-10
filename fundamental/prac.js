const DC2 = new Promise(function(resolve, reject) {
    setTimeout(() => {
        resolve(console.log('나는 비동기 resolve다!'))
    }, 1500);
    setTimeout(() => {
        reject(new Error('나는 비동기 Error다!'))
    }, 2000);
})