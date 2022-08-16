const fs = require('fs');

// poop 우우
const befreMem = process.memoryUsage().rss;
fs.readFile('./12-stream/file.txt', (_, data) => {
    fs.writeFile('./12-stream/file2.txt', data, () => {});
    // calculate
    const afterMem = process.memoryUsage().rss;
    const diff = afterMem - befreMem;
    const consumed = diff / 1024 / 1024;
    console.log(diff);
    console.log(`Consumed Memory: ${consumed}MB`);
});

// 5038080
// Consumed Memory: 4.8046875MB