// app.js
import {MoveFiles} from './eventListener.js';

filterIsEditedImg(pictureFileName) {
  // EditedImg 만 filter 하는 함수
  const fileExtension = path.extname(pictureFileName);
  const isEditedImg = fileExtension === '.jpg' && pictureFileName.slice(0,3) === 'IMG' && pictureFileName.slice(4,5) === 'E'
  return isEditedImg;
}

filterIsVideo(videoFileName) {
  // Video 만 filter 하는 함수
  const fileExtension = path.extname(videoFileName);
  const isVideoFile = (fileExtension === '.mp4' || fileExtension === '.mov')
  return isVideoFile;
}

filterIsImg(videoFileName) {
  // Img 만 filter 하는 함수
  const fileExtension = path.extname(videoFileName);
  const isImgFile = (fileExtension === '.png' || fileExtension === '.aae')
  return isImgFile;
}


const main = async () => {
  const picturesDirName = 'test';
  const emiiter = new MoveFiles(picturesDirName);
  
  const consoleMoveLog = (movedFileName, targetDirName) => {
    console.log(`move ${movedFileName} to ${targetDirName}`);
  };
  
  emiiter.moveEditedImgFiles('duplicated', consoleMoveLog);
  
  emiiter.moveVideoFiles('video', consoleMoveLog);
  
  emiiter.moveImgFiles('captured', consoleMoveLog);
}

main();
