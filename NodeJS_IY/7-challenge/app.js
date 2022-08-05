// const { stdin, mainModule } = require('process');
// const { StringDecoder } = require('string_decoder');

const path = require('path');
const fs = require('fs');
const { AsyncLocalStorage } = require('async_hooks');
const ps = fs.promises;

// fs.readdir(path.join(__dirname, 'test'), function(error, filelist){
//     if (!error) {
//         var fileList = filelist;
//     } else {
//         console.log("ERROR!! : ", error);
//     }
//     console.log(fileList);
//   })

// 경로 탐색하여 파일리스트 불러오기
async function getFileList(folder) {
    const returnVal =  await ps.readdir(path.join(__dirname, folder));
    return returnVal;
}

// 특정 경로 폴더 만들기
async function makeDir(dirPath) {
    ps.mkdir(dirPath, { recursive: true})
    .catch(console.error);
}


if (path.extname(__filename) in ['.mov', '.mp4']) {

}
if (path.extname(__filename) in ['.png', '.aae']) {

}
// 패턴 찾기

// // reading a file
// ps.readFile('./text.txt', 'utf8') //
//   .then((data) => console.log(data))
//   .catch(console.error);

// // writing a file
// ps.writeFile('./file.txt', 'Hello, Dream Coders! :) ') //
//   .catch(console.error);

// ps.appendFile('./file.txt', 'Yo!, Dream Coders! :) ') //
//   .catch(console.error);

// // copy
// ps.copyFile('./file.txt', './file2.txt') //
//   .catch(console.error);

// // folder
// ps.mkdir('sub-folder') //
//   .catch(console.error);

// ps.readdir('./') //
//   .then(console.log)
//   .catch(console.error);
