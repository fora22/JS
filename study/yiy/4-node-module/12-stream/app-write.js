const fs = require('fs');

const writeStream = fs.createWriteStream('./file3.txt');
writeStream.on('finish', () => {
  console.log('finished!');
});

writeStream.write('hello!');
writeStream.write('world!');
writeStream.end(); // write를 끝내고 싶다면 써야함
