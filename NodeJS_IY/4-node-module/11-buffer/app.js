// Fixed-size chuck of memory 
// array of integers, byte of data
const fs = require('fs');

const buf = Buffer.from('Hi');
console.log(buf);
console.log(buf.length);
console.log(buf[0]);
console.log(buf[1]);
console.log(buf.toString());

// create
const buf2 = Buffer.alloc(2); // 메모리 chuck 초기화
const buf3 = Buffer.allocUnsafe(2); // fast 초기화 메모리가 많이 사용되는 경우 다른 값이 출력될 경우도 있음
buf2[0] = 72;
buf2[1] = 105;
buf2.copy(buf3); // buf2 -> buf3
console.log(buf2.toString());
console.log(buf3.toString());

// concat
const newBuf = Buffer.concat([buf, buf2, buf3]);
console.log(newBuf.toString());
