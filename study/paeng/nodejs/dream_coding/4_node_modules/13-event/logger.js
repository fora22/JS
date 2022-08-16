const EventEmiiter = require('events');

class Logger extends EventEmiiter {
  log(callback) {
    this.emit('log', 'started...');
    callback();
    this.emit('log', 'ended!');
  }
}

module.exports.Logger = Logger;