# TypeScirpt
TypeScirpt은 JavaScript의 SuperSet이다.
# Settings
## Environment
기본적으로 다음이 필요하다.
- Node.js
- Visual Studio Code
## Initalize
- 프로젝트 cmd에서 `yarn init`을 친다.
- `name`, `version`, `description` 등을 설정하라고 나오는데 쓰고싶은거는 쓰고 안쓰고 싶은거는 안쓰면 된다(default값이 있음)
- 폴더에 `package.json` 파일이 만들어진다.
- 그 다음 `tsconfig.json` 파일을 만든다.
```json
{
    "compilerOptions": {
        "module": "commonjs",
        "target": "ES2015",
        "sourceMap": true       
    },
    "include": ["index.ts"],  // 실행할 파일
    "exclude": ["node_modules"]
} 
```
을 넣는다.
- `package.json`에 명령어 설정을 해준다.
  - `yarn start` 했을 때 `index.ts` 파일을 컴파일해 `index.js`파일을 만들고
  - `index.js`가 실행되도록 설정
```json
{
  "name": "TypeChain",
  "version": "1.0.0",
  "description": "Learning Typescript by making a BlockChain with NomadCoders",
  "main": "index.js",
  "repository": "https://github.com/fora22/JS",
  "author": "fora22",
  "license": "MIT"
  // 위는 yarn init 하면서 생기는 내용, 밑의 내용을 추가해야함
  "scripts": {
    "start": "node index.js",
    "prestart": "tsc"
  }
}

```