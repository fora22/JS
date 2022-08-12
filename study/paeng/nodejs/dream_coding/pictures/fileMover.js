import path from "path";
const __dirname = path.resolve();
import fileSystem from "fs";
const fs = fileSystem.promises;

export class MoveFiles {
  constructor(targetDirName = "") {
    this.targetDirName = targetDirName;
  }

  async getFileNames() {
    return await fs.readdir(path.join(__dirname, this.dirName));
  }

  moveFile(srcFile, targetFilePath) {
    const srcDir = path.join(__dirname, srcFile);
    // 이게 필요한가?
    const readStream = fileSystem.createReadStream(srcDir);
    const writeStream = fileSystem.createWriteStream(targetFilePath);
  }

  makeFolder() {
    const targetDirPath = path.join(__dirname, this.targetDirName);
    // folder 가 없을 경우 생성
    if (!fileSystem.existsSync(targetDirPath)) {
      const mkdir = async () => {
        await fs.mkdir(targetDirPath);
      };
      mkdir();
    }
  }

  async moveFiles(filterFunc, callback) {
    // file 이름들 가져오기
    fileNames = await this.getFileNames();

    // 수정된 비디오만 filter
    filteredFiles = fileNames.filter(filterFunc);

    // target folder 생성
    this.makeFolder(this.targetDirName);

    filteredFiles.forEach((file) => {
      // file 이 옮겨갈 파일 경로 생성
      const targetFilePath = path.join(__dirname, this.targetDirName, file);
      // file 이 경로에 없을 경우 file 이동
      if (!fileSystem.existsSync(targetFilePath)) {
        this.moveFile(file, targetFilePath);
      }
      // callback 실행
      callback(file, this.targetDirName);
    });
  }
}

export class moveEditedFiles extends MoveFiles {
  async moveFiles(filterFunc, callback) {
    // file 이름들 가져오기
    fileNames = await this.getFileNames();

    // 수정된 비디오만 filter
    filteredFiles = fileNames.filter(filterFunc);

    // target folder 생성
    this.makeFolder(this.targetDirName);

    filteredFiles.forEach((file) => {
      // 원본 이미지 파일 이름 생성
      const unEditedImgFileName = `${file.slice(0, 4)}${file.slice(
        5,
        undefined
      )}`;

      // file 이 옮겨갈 파일 경로 생성
      const targetFilePath = path.join(__dirname, this.targetDirName, file);
      // file 이 경로에 없을 경우 file 이동
      if (!fileSystem.existsSync(targetFilePath)) {
        this.moveFile(file, targetFilePath);
      }
      // callback 실행
      callback(unEditedImgFileName, this.targetDirName);
    });
  }
}
