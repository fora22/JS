// const { EventEmitter } = require('stream');
const logger = require('./logger.js');

// logger.log(() => {
//   console.log(".... doing something!");
// });

// const emitter = new EventEmitter(); // 이렇게 하면 logger에서 지정한 emtter 객체를 들을 수 없어..
const emitter = new logger.Logger();

emitter.on('log', (event) => {
  console.log(event);
});

emitter.log(() => {
  console.log('..... ꝍ loopings ꝍ....');
  for (let i = 0; i < 5; i++) {
    console.log('count', i);
  }
});
