const path = require('path');

// POSIX (Unix: Mac, Linux): 'Users/temp/myfile.html'
// Windows: 'C:\\temp\\myfile.html'

console.log(__dirname); // 디렉토리 이름 c:\projects\node\9-path
console.log(__filename); // 파일명 c:\projects\node\9-path\app.js

console.log(path.sep); // 구분자 \
console.log(path.delimiter); // 환경변수 구분자 ;

// basename
console.log(path.basename(__filename)); // 파일명만 app.js
console.log(path.basename(__filename, '.js')); // 확장자도 없이 app

// dirname
console.log(path.dirname(__filename)); // 디렉토리 경로만 c:\projects\node\9-path

// extension
console.log(path.extname(__filename)); // 확장자만 .js

//parse
const parsed = path.parse(__filename);
console.log(parsed); // 오브젝트 형태의 정보 {root: 'c:\', dir: 'c:\projects\node\9-path', base: 'app.js', ext: '.js', name: 'app'}
parsed.root; // 'c:\'
parsed.name; // 'app'

const str = path.format(parsed);
console.log(str); // 스트링 형태로 변환 c:\projects\node\9-path\app.js

// isAbsolute 해당경로가 절대경로인지 상대경로인지 확인 가능 
console.log('isAbsolute?', path.isAbsolute(__dirname)); // /Users/ // 절대경로 isAbsolute? true
console.log('isAbsolute?', path.isAbsolute('../')); // 상대경로 isAbsolute? false

// normalize
console.log(path.normalize('./folder////////sub')); // 경로에서 이상한 부분을 자동으로 고쳐줌 folder\sub

// join
console.log(__dirname + path.sep + 'image'); // c:\projects\node\9-path\image
console.log(path.join(__dirname, 'image'));

/*
C:\Users\user\OneDrive\Project\nodejs\dream_coding\9-path
C:\Users\user\OneDrive\Project\nodejs\dream_coding\9-path\app.js
\
;
app.js
app
C:\Users\user\OneDrive\Project\nodejs\dream_coding\9-path
.js
{
  root: 'C:\\',
  dir: 'C:\\Users\\user\\OneDrive\\Project\\nodejs\\dream_coding\\9-path',
  base: 'app.js',
  ext: '.js',
  name: 'app'
}
C:\Users\user\OneDrive\Project\nodejs\dream_coding\9-path\app.js
isAbsolute? true
isAbsolute? false
folder\sub
C:\Users\user\OneDrive\Project\nodejs\dream_coding\9-path\image
C:\Users\user\OneDrive\Project\nodejs\dream_coding\9-path\image
*/