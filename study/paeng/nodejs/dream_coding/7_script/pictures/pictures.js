// ellie 의 코드
// 계획
// 1. 사용자가 원하는 폴더의 이름을 받아온다.

import path from "path";
import os from "os";
import fs from "fs";
import { info } from 'console';

const folder = process.argv[2];
// 강의에서는 home 디렉토리를 사용했지만 경로가 다르므로 수정
// const workingDir = path.join(os.homedir(), folder);

const __dirname = path.resolve();
const workingDir = path.join(__dirname, folder);
if (!folder || !fs.existsSync(workingDir)) {
  console.error("Please enter folder name in Pictures");
  // return false;
}

// 2. 그 폴더안에 video, captured, duplicated 폴더를 만든다.
const videoDir = path.join(workingDir, "video");
const captureDir = path.join(workingDir, "capture");
const duplicatedDir = path.join(workingDir, "duplicated");

!fs.existsSync(videoDir) && fs.mkdirSync(videoDir);
!fs.existsSync(captureDir) && fs.mkdirSync(captureDir);
!fs.existsSync(duplicatedDir) && fs.mkdirSync(duplicatedDir);

// 3. 폴더안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, IMG_1234 (IMG_E1234)
fs.promises
  .readdir(workingDir)
  .then(processFiles)
  .catch(console.log);

function processFiles(files) {
  files.forEach((file) => {
    if (isVideoFile(file)) {
      move(file, videoDir);
    } else if (isCapturedFile(file)) {
      move(file, captureDir);
    } else if (isDuplicatedFile(files, file)) {
      move(file, duplicatedDir);
    }
  });
}

function isVideoFile(file) {
  const regExp = /(mp4|mov)$/gm;
  const match = file.match(regExp);
  // !!macth: match 가 있으면 true, null이면 false
  return !!match;
}
function isCapturedFile(file) {
  const regExp = /(png|aae)$/gm;
  const match = file.match(regExp);
  // !!macth: match 가 있으면 true, null이면 false
  return !!match;
}
function isDuplicatedFile(files, file) {
  // IMG_XXXX -> IMG_EXXXX
  if (!file.startsWith('IMG_') || file.startsWith('IMG_E')) {
    return false;
  }
  
  const edited = `IMG_E${file.split('_')[1]}`;
  const found = files.find(f => f.includes(edited));
  return !!found;
}

function move(file, targetDir) {
  console.info(`move ${file} to ${targetDir}`);
  const oldPath = path.join(workingDir, file);
  const newPath = path.join(targetDir, file);
  fs.promises
    .rename(oldPath, newPath)
    .catch(console.error);
}


