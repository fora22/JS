const logger = require('./logger.js');
const emitter = new logger.Logger();

emitter.on('log', (event) => {
    console.log(event);
});

emitter.log(() => {
    console.log('..... looping!');
    for (let i = 0; i < 5; i++) {
        console.log('count', i);
    }
});

// started...
// ..... looping!
// count 0
// count 1
// count 2
// count 3
// count 4
// ended!