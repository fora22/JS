const EventEmiiter = require('events');
const emitter = new EventEmiiter();

const callback1 = (args) => {
    console.log('first callback - ', args);
};

emitter.on('ellie', callback1);

emitter.on('ellie', callback1);

// ellie event 호출 함
emitter.emit('ellie', {message: 1});
emitter.emit('ellie', {message: 2});
// emitter.removeListener();   // 하나만 제거
emitter.removeAllListeners();   // 전부 제거
emitter.emit('ellie', {message: 3});

// first callback -  { message: 1 }
// first callback -  { message: 1 }
// first callback -  { message: 2 }
// first callback -  { message: 2 }