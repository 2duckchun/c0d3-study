new Promise((resolve, reject) => {
    setTimeout(() => resolve('결과'), 2000)
})
    .finally(() => console.log('프라미스가 준비되었다.'))
    .then(result => console.log(result));