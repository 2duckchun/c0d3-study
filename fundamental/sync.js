// Date.now()는 현재 시간을 숫자(ms)로 반환한다.

function sleep(func, delay) {
    const delayUntil = Date.now() + delay;
    while (Date.now() < delayUntil);
    func();
}

function foo() {
    console.log('foo');
}

function bar() {
    console.log('bar');
}

sleep(foo, 3 * 1000);
bar();