const fs = require('fs');

// 3
// rename(..., callback(error, data))    Non-Blocking 함수
// try { renameSync(...) } catch(e)  Blocking 함수
// promises.rename().then().catch(0)

try {
    fs.renameSync('./10-file/text.txt', './10-file/text-new.txt');
} catch (error) {
    console.error(error);
}

fs.rename('./10-file/text-new.txt', './10-file/text.txt', (error) => {
    console.log(error);
});
console.log('hello');

fs.promises
  .rename('./10-file/text.txt', './10-file/text-new.txt')
  .then(() => console.log('Done!'))
  .catch(console.error)

//hello
// null
// Done!