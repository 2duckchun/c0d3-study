const timeout = setTimeout(() => {
    console.log('1.5초 후 출력');
}, 1500)

const interval = setInterval(() => {
    console.log('1초마다 출력');
}, 1000);

const timeout2 = setTimeout(() => {
    console.log('출력되지 않습니다.')
}, 3000);

setTimeout(() => {
    clearTimeout(timeout2);
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(() => {
    console.log('즉시 실행12')
});

const immediate2 = setImmediate(() => {
    console.log('실행되지 않습니다.')
});

clearImmediate(immediate2);