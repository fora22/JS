const fs = require('fs');

const data = [];
const readStream = fs.createReadStream('./12-stream/file.txt', {
    highWaterMark: 8, // default 64 kbytes, but here 8 bytes
    encoding: 'utf-8',
}).on('data', chunk => {
    // if data is comming
    // data event 가 발생 했을 때
    // console.log(chunk);
    data.push(chunk);
    console.count('data');
}).on('end', () => {
    // readStream 이 끝나서 end event가 발생했을 때
    console.log(data.join(''));
}).on('error', error => {
    // if error occured
    console.log(error);
});