const path = require('path');
const os = require('os');
const fs = require('fs');

// 계획

// 1. 사용자가 원하는 폴더의 이름을 받아온다
const folder = process.argv[2];
const workingDir = path.join(os.homedir(), 'Documents/study/JS/NodeJS_IY/7-challenge', folder);
// const workingDir = path.join(os.homedir(), 'NodeJS_IY/7-challenge', folder);
console.log(workingDir);
if(!folder || !fs.existsSync(workingDir)) { // 경로에 폴더 존재여부 확인
  console.error('Please enter folder name in Pictures');
  return;
}


// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다
const videoDir = path.join(workingDir, 'video');
const caturedDir = path.join(workingDir, 'captured');
const duplicatedDir = path.join(workingDir, 'duplicated');

// 폴더를 만들고 파일을 처리해줘야되기 때문에(동기적으로 해야되서) mkdirSync를 씀
// existsSync : Directory가 존재 한다면 true 없다면 false 
!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(caturedDir) && fs.mkdirSync(caturedDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);


// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4/mov, png/aae, IMG_1234 (IMG_E1234) 읽기
fs.promises
  .readdir(workingDir) //
  .then(processFiles)
  .catch(console.log);


// 실질적으로 파일을 이동시키는 함수
function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, caturedDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  })
}

// 파일 확장자로 구분하는 함수
function isVideoFile(file){
    const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  return !!match; // match 경로가 있다면 true 아니면 false
}
function isCapturedFile(file){
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  return !!match;
}
function isDuplicatedFile(files, file){
  // IMG_XXX -> IMG_EXXX
  if(!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }

  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find((f) => f.includes(edited));
  return !!found;
}

// 파일 이동시키는 함수 
function move(file, targetDir) {
  console.info(`move ${file} to ${path.basename(targetDir)})`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises
  .rename(oldPath, newPath)
  .catch(console.error);
}