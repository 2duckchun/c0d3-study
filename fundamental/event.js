const EventEmitter = require('events');

const myEvent = new EventEmitter();
myEvent.addListener('event1', () => {
    console.log('이벤트 1');
});
myEvent.on('event2', () => {
    console.log('이벤트 2');
});
myEvent.on('event2', () => {
    console.log('이벤트 2 추가');
});
myEvent.once('event3', () => {
    console.log('이벤트 3');
}); // 한번만 실행됨

myEvent.emit('event1');  // 이벤트 1
myEvent.emit('event2');  // 이벤트 2, 이벤트 2 추가
myEvent.emit('event3');  // 이벤트 3
myEvent.emit('event3');  // 출력 안됨
myEvent.emit('event2'); // 이벤트 2, 이벤트 2 추가

myEvent.on('event4', () => {
    console.log('event4');
});
myEvent.removeAllListeners('event4')
myEvent.emit('event4'); // 출력 안됨

const listener = () => {
    console.log('이벤트 5')
};
myEvent.on('event5', listener);
myEvent.emit('event5') // 이벤트 5
myEvent.removeListener('event5', listener)
myEvent.emit('event5') // 출력 안됨

console.log(myEvent.listenerCount('event2')); // 2 출력 (event2에 연결된 리스너 2개)