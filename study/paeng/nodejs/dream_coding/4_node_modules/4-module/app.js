//app.js

const counter = require('./counter.js'); //import하는 함수

// console.log(count);
// console.log(getCount());

counter.increase();
counter.increase();
counter.increase();
console.log(counter.getCount());