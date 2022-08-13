const fs = require('fs').promises;

// read a file
fs.readFile('./10-file/text.txt', 'utf8')
  .then((data) => console.log(data))
  .catch(console.error);

// Hello!

// writing a file
fs.writeFile('./10-file/file.txt', 'Hello, Dream Coders! :')
  .catch(console.error);

// 파일 생성됨
// Hello, Dream Coders! :

fs.writeFile('./10-file/file.txt', 'Yo, Dream Coders! :')
  .catch(console.error);

// 덮어쓰기 됨
// Yo, Dream Coders! :

fs.appendFile('./10-file/file.txt', 'Yo, Dream Coders! :')
  .catch(console.error);

// file 에 내용 추가됨
// Yo, Dream Coders! : Yo, Dream Coders! :

fs.appendFile('./10-file/file.txt', 'Yo, Dream Coders! :')
  .then(() => {
    // copy
    fs.copyFile('./10-file/file.txt', './10-file/file2.txt')
      .catch(console.error);
  })
  .catch(console.error);

// file2 생성됨
// Yo, Dream Coders! :! :Yo, Dream Coders! :Yo, Dream Coders! :

// folder
fs.mkdir('./10-file/sub-folder')
  .catch(console.error);

// sub-folder 폴더 생성됨

fs.readdir('./10-file/')
  .then(console.log)
  .catch(console.error);

//   [
//     'app.js',
//     'app2.js',
//     'file.txt',
//     'file2.txt',
//     'sub-folder',
//     'text.txt'
//   ]
