// app.js
import {MoveFiles} from './fileMover';

const filterIsEditedImg = (pictureFileName) => {
  // EditedImg 만 filter 하는 함수
  const fileExtension = path.extname(pictureFileName);
  const isEditedImg = fileExtension === '.jpg' && pictureFileName.slice(0,3) === 'IMG' && pictureFileName.slice(4,5) === 'E'
  return isEditedImg;
}

const filterIsVideo = (videoFileName) => {
  // Video 만 filter 하는 함수
  const fileExtension = path.extname(videoFileName);
  const isVideoFile = (fileExtension === '.mp4' || fileExtension === '.mov')
  return isVideoFile;
}

const filterIsImg = (videoFileName) => {
  // Img 만 filter 하는 함수
  const fileExtension = path.extname(videoFileName);
  const isImgFile = (fileExtension === '.png' || fileExtension === '.aae')
  return isImgFile;
}


const main = async () => {
  const consoleMoveLog = (movedFileName, targetDirName) => {
    console.log(`move ${movedFileName} to ${targetDirName}`);
  };
  const originalImgMover = new MoveFiles('duplicated');
  originalImgMover.moveFiles(filterIsEditedImg, consoleMoveLog);
  
  const videoMover = new MoveFiles('video');
  videoMover.moveFiles(filterIsVideo, consoleMoveLog);

  const imgMover = new MoveFiles('captured');
  imgMover.moveFiles(filterIsImg, consoleMoveLog);
  
}

main();
