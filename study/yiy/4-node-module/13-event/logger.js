const EventEmitter = require('events');
// const emitter = new EventEmitter();

// function log(callback) {
//   emitter.emit('log', 'started...');
//   callback();
//   emitter.emit('log', 'ended!');
// }

// EventEmitter는 한번 객체를 만들면 그 객체 내에서 발생하는 이벤트에 한해서 들을 수 있다.
// 여러 EventEmitter 객체를 만들면 다른 emitter에서 발생하는 이벤트는 다른 emitter에서 들을 수 없다.
class Logger extends EventEmitter {
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger;
