const fs = require('fs');

const readStream = fs.createReadStream('./file.txt', {
    highWaterMark: 8, // 8bytes, 기본 : 64 kbytes 한번에 얼마만큼에 데이터를 읽어들이는지
    encoding: 'utf-8',
}); // 밑과 같이 따로 나눌 필요없이 createReadStream에 .on을 통해 계속해서 선언할 수도 있다.

const beforeMem = process.memoryUsage().rss;
const data = [];
readStream.once('data', (chunk) => { // once를 통해 처음 들어오는 chunk 하나만 받아올 수 있다.
  // console.log(chunk);
  data.push(chunk);
  console.count('data');
//   readStream.close();
});

// readStream.on('end', () => {
//   console.log(data.join(''));
// }); 

readStream.on('close', () => {
  console.log(data.join(''));
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`);
});

readStream.on('error', (error) => {
  console.log(error);
});