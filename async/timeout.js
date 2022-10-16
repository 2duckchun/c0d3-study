// function execute() {
//     console.log('1')
//     setTimeout(() => {
//         console.log('2');
//     }, 2000)
//     console.log('3')
// }
// execute();

// 주어진 seconds(초)가 지나면 callback 함수를 호출함.
// 단, seconds가 0보다 작으면 에러를 던짐.

function runInDelay(callback, seconds) {
    if(!callback) {
        throw new Error('콜백함수가 입력되어야 함.')
    }
    if (!seconds || seconds < 0) {
        throw new Error('seconds는 입력되거나 0보다 커야함')
    }
    setTimeout(callback, seconds * 1000);
}

try {

} catch (error) {
    console.log('에러남');
}
