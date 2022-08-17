const fs = require('fs').promises; // file 시스템 모듈안에 있는 promise

// reading a file
// fs.readFile('./text.txt') // 그냥 읽으면 Buffer 형태로 읽어들임
fs.readFile('./text.txt', 'utf8') // 그대로 읽어들임
  .then((data) => console.log(data))
  .catch(console.error);

// writing a file
fs.writeFile('./file.txt', 'Hello, Dream Coders! :) ') // Promise<void>; 아무것도 읽어들이지 않기에 catch만 사용
  .catch(console.error);

// append a file
fs.appendFile('./file.txt', 'Yo!, Dream Coders! :) ') //
  .catch(console.error);

copy 
fs.copyFile('./file.txt', './file2.txt') // source target 순. 비동기로 동작하기에 아무것도 안쓰여진 파일이 복사될 경우도 있음
  .catch(console.error);

// 동작한 뒤에 copy하고 싶다면
// fs.appendFile('./file.txt', 'Yo!, Dream Coders! :) ') //
//   .then(() => {
//     fs.copyFile('./file.txt', './file2.txt')
//       .catch(console.error);
//   })
//   .catch(console.error);

// folder
fs.mkdir('sub-folder') //
  .catch(console.error);

fs.readdir('./') // 현재 경로에 있는 모든 파일
  .then(console.log) // 문자열 형태로 제공해주기 때문에 console.log로 print
  .catch(console.error);
