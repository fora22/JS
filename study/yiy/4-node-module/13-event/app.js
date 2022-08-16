const EventEmitter = require('events'); // event 모듈 불러오기
const { emit } = require('process');
const emitter = new EventEmitter();

const callback1 = (args) => {
  console.log('first callback - ', args);
}; // 콜백함수 지정
emitter.on('ellie', callback1); // 콜백함수 전달

emitter.on('ellie', (args) => {
  console.log('second callback - ', args);
});

emitter.emit('ellie', { message: 1 }); // 이벤트 이름과 전달하고자 하는 object 형태의 메시지를 emit으로 입력하면 콜백함수에서 접근할 수 있다.
emitter.emit('ellie', { message: 2 });
// emitter.removeListener('ellie', callback1); // callback1 콜백함수 제거
emitter.removeAllListeners(); // 모든 콜백함수 제거
emitter.emit('ellie', { message: 3 });
