const path = require('path');
const fs = require('fs');
const ps = fs.promises;

// 경로 탐색하여 파일리스트 불러오기
async function getFileList(folder) {
    const returnVal =  await ps.readdir(path.join(__dirname, folder));
    return returnVal;
}

// 특정 경로 폴더 만들기
async function makeDir() {
    ps.mkdir('./test/video', {recursive: true})
    .catch(console.error);
    ps.mkdir('./test/captured', {recursive: true})
    .catch(console.error);
    ps.mkdir('./test/duplicated', {recursive: true})
    .catch(console.error);
}

// 파일 옮기기
function moveFile(folderName, fileName) {
    fs.promises
    .rename('./test/' + fileName, './test/'+ folderName + '/' + fileName)
    .catch(console.error);
}

async function main() {
    await makeDir();
    const fileList = await getFileList('test');
    for (var i in fileList) { //forEach 로 대체 예정
        var fileName = fileList[i];
        if (['.mov', '.mp4'].indexOf(path.extname(fileName)) != -1) {
            await moveFile('video', fileName);    
        }
        if (['.png', '.aae'].indexOf(path.extname(fileName)) != -1) {
            await moveFile('captured', fileName);
        }

        // 이미지 파일 명은 _기준으로 나눠 E가 붙었는지 확인
        var imageFile = path.basename(fileName, path.extname(fileName)).split('_')[1];
        if (imageFile && !imageFile.includes('E')) {
            await moveFile('duplicated', fileName);
        }
    }
}

main();
