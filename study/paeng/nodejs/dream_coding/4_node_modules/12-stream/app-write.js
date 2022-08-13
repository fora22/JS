const fs = require('fs');

const writeStream = fs.createWriteStream('./12-stream/file3.txt');
writeStream.on('finish', () => {
    console.log('finished!');
});

writeStream.write('hello!');
writeStream.write('world!');
writeStream.end();
