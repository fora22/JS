const fs = require('fs');

// 💩
const beforeMem = process.memoryUsage().rss; // 사용전 메모리 상태
fs.readFile('./file.txt', (_, data) => {
  fs.writeFile('./file2.txt', data, () => {}); // 읽은 데이터를 file2에 쓰기
  // calculate
  const afterMem = process.memoryUsage().rss;
  const diff = afterMem - beforeMem;
  const consumed = diff / 1024 / 1024;
  console.log(diff);
  console.log(`Consumed Memory: ${consumed}MB`); // MB 단위로 사용된 메모리 print
});

// 스트림을 사용하면 Buffer 별로 조금씩 읽고 쓰고를 할 수가 있다.
