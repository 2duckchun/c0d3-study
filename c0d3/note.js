const async = (msg, second) => {
    setTimeout(() => {
        console.log(msg);
    }, second * 1000);
}

async('슬기님 파이팅', 2)
console.log('나도 파이팅');