const { stdin, mainModule } = require('process');
const { StringDecoder } = require('string_decoder');

const fs = require('fs');
// const fs = require('fs').promises;


// reading a file
fs.readFile('./text.txt', 'utf8') //
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ') //
  .catch(console.error);

fs.appendFile('./file.txt', 'Yo!, Dream Coders! :) ') //
  .catch(console.error);

// copy
fs.copyFile('./file.txt', './file2.txt') //
  .catch(console.error);

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

fs.readdir('./') //
  .then(console.log)
  .catch(console.error);


// 3
// rename(...., callback(error, data))
// try { renameSync(....) } catch(e) { }
// promises.rename().then().catch(0)

try {
  fs.renameSync('./text.txt', './text-new.txt');
} catch (error) {
  console.error(error);
}

fs.rename('./text-new.txt', './text.txt', (error) => {
  console.log(error);
});
console.log('hello');

fs.promises
  .rename('./text2.txt', './text-new.txt') //
  .then(() => console.log('Done!'))
  .catch(console.error);
  
