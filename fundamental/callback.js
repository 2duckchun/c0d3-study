function command(g1, g2) {
    if (x < 5) return g1();
    else return g2();
}

function kwanwoo() {
    return ('관우가 출전한다!')
}

function jangbi() {
    return ('장비가 출전한다!')
}

x = 4 // 5 미만 관우, 5 이상 장비
const order = command(kwanwoo, jangbi);
console.log(order);