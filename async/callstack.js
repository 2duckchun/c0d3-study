function a() {
    for ( let i = 0 ; i < 10000000; i = i + 1);
    return 1;
}

function b() {
    return a() + 1;
}

function c() {
    return b() + 1
}

const result = c();
console.log(result);