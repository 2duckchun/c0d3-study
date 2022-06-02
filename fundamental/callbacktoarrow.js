function command(g1, g2) {
    if (x < 5) return g1();
    else return g2();
}
x = 6;
const order = command(
    () => '관우가 출전한다!',
    () => '장비가 출전한다!'
)

console.log(order);