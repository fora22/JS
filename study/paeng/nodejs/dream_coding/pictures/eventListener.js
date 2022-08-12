import { EventEmitter }  from 'events';
import path from 'path';
const __dirname = path.resolve();
import fileSystem from 'fs';
const fs = fileSystem.promises;

export class MoveFiles extends EventEmitter {
  constructor(dirName='') {
    super();
    this.dirName = dirName;
  }
  async getFileNames() {
    return await fs.readdir(path.join(__dirname, this.dirName));
  }

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

  moveFile(srcFile, targetFilePath) {
    const srcDir = path.join(__dirname, srcFile);
    // 이게 필요한가?
    const readStream = fileSystem.createReadStream(srcDir);
    const writeStream = fileSystem.createWriteStream(targetFilePath);
  }
  
  makeFolder(targetDirName) {
    const targetDirPath = path.join(__dirname, targetDirName);
    // folder 가 없을 경우 생성
    if (!(fileSystem.existsSync(targetDirPath))) {
      const mkdir = async () => {await fs.mkdir(targetDirPath)};
      mkdir();
    }
  }

  async moveEditedImgFiles(targetDirName, callback) {
    // file 이름들 가져오기
    this.fileNames = await this.getFileNames();
    
    // 수정된 이미지만 filter
    this.editedImgs = this.fileNames.filter(this.filterIsEditedImg);
    
    // target folder 생성
    this.makeFolder(targetDirName);
    
    this.editedImgs.forEach(editedImg => {
      // 원본 이미지 파일 이름 생성
      const unEditedImgFileName = `${editedImg.slice(0, 4)}${editedImg.slice(5, undefined)}`;
      
      // file 이 옮겨갈 파일 경로 생성
      const targetFilePath = path.join(__dirname, targetDirName, unEditedImgFileName);
      
      // file 이 경로에 없을 경우 file 이동
      if (!(fileSystem.existsSync(targetFilePath))) {
        this.moveFile(unEditedImgFileName, targetFilePath);
      }
      
      // callback 실행
      callback(unEditedImgFileName, targetDirName);
    });
  }
  
  async moveVideoFiles(targetDirName, callback) {
    // file 이름들 가져오기
    this.fileNames = await this.getFileNames();
    
    // 수정된 비디오만 filter
    this.videos = this.fileNames.filter(this.filterIsVideo);
    
    // target folder 생성
    this.makeFolder(targetDirName);
    
    this.videos.forEach(video => {
      // file 이 옮겨갈 파일 경로 생성
      const targetFilePath = path.join(__dirname, targetDirName, video);
      // file 이 경로에 없을 경우 file 이동
      if (!(fileSystem.existsSync(targetFilePath))) {
        this.moveFile(video, targetFilePath);
      }
      // callback 실행
      callback(video, targetDirName);
    });
    
  }
  
  async moveImgFiles(targetDirName, callback) {
    // file 이름들 가져오기
    this.fileNames = await this.getFileNames();

    // 수정된 이미지만 filter
    this.imgs = this.fileNames.filter(this.filterIsImg);

    // target folder 생성
    this.makeFolder(targetDirName);

    this.imgs.forEach(img => {
      // file 이 옮겨갈 파일 경로 생성
      const targetFilePath = path.join(__dirname, targetDirName, img);
      // file 이 있을 경우 file 이동
      if (!(fileSystem.existsSync(targetFilePath))) {
        this.moveFile(img, targetFilePath);
      }
      // callback 실행
      callback(img, targetDirName);
    });
  }
  
}

export class moveEditedFiles extends moveFile {
  constructor(){
    super();
  }
}