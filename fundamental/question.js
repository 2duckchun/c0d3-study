const fibonacci = function* () {
    let [pre, cur] = [0, 1];

    while (true) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
}

const ab = fibonacci()


for (const num of ab) {
    if (num > 5000) break;
    console.log(num);
}