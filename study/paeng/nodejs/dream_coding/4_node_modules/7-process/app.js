const process = require('process'); // import

console.log(process.execPath);
console.log(process.version);
console.log(process.pid);
console.log(process.ppid);
console.log(process.platform);
console.log(process.env);
console.log(process.uptime());
console.log(process.cwd());
console.log(process.cpuUsage());

/*
v16.15.0
15984
14820
win32
{
  ALLUSERSPROFILE: 'C:\\ProgramData',
  APPDATA: 'C:\\Users\\user\\AppData\\Roaming',
  CHROME_CRASHPAD_PIPE_NAME: '\\\\.\\pipe\\crashpad_10532_FRRBPUHEJYBZMGYN',
  CLASSPATH: '%JAVA_HOME%\\lib',
  CommonProgramFiles: 'C:\\Program Files\\Common Files',
  'CommonProgramFiles(x86)': 'C:\\Program Files (x86)\\Common Files',
  CommonProgramW6432: 'C:\\Program Files\\Common Files',
  COMPUTERNAME: 'NB-T20512B',
  ComSpec: 'C:\\Windows\\system32\\cmd.exe',
  CONDA_DEFAULT_ENV: 'base',
  CONDA_EXE: 'C:\\Users\\user\\anaconda3\\Scripts\\conda.exe',
  CONDA_PREFIX: 'C:\\Users\\user\\anaconda3',
  CONDA_PROMPT_MODIFIER: '(base) ',
  CONDA_PYTHON_EXE: 'C:\\Users\\user\\anaconda3\\python.exe',
  CONDA_SHLVL: '1',
  DriverData: 'C:\\Windows\\System32\\Drivers\\DriverData',
  GOPATH: 'C:\\Users\\user\\go',
  HOMEDRIVE: 'C:',
  HOMEPATH: '\\Users\\user',
  JAVA_HOME: 'C:\\Program Files\\Java\\jdk-11.0.15.1',
  LOCALAPPDATA: 'C:\\Users\\user\\AppData\\Local',
  LOGONSERVER: '\\\\NB-T20512B',
  NUMBER_OF_PROCESSORS: '8',
  OneDrive: 'C:\\Users\\user\\OneDrive',
  OneDriveConsumer: 'C:\\Users\\user\\OneDrive',
  ORIGINAL_XDG_CURRENT_DESKTOP: 'undefined',
  OS: 'Windows_NT',
  Path: 'C:\\Users\\user\\anaconda3;C:\\Users\\user\\anaconda3\\Library\\mingw-w64\\bin;C:\\Users\\user\\anaconda3\\Library\\usr\\bin;C:\\Users\\user\\anaconda3\\Library\\bin;C:\\Users\\user\\anaconda3\\Scripts;C:\\Users\\user\\anaconda3\\bin;C:\\Users\\user\\anaconda3\\condabin;C:\\Program Files\\Common Files\\Oracle\\Java\\javapath;C:\\Windows\\system32;C:\\Windows;C:\\Windows\\System32\\Wbem;C:\\Windows\\System32\\WindowsPowerShell\\v1.0;C:\\Windows\\System32\\OpenSSH;C:\\Program Files\\Git\\cmd;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\bin;%JAVA_HOME%\\bin;C:\\Program Files\\nodejs;C:\\Program Files\\Bandizip;C:\\Program Files\\Go\\bin;C:\\Users\\user\\AppData\\Local\\Microsoft\\WindowsApps;C:\\Users\\user\\AppData\\Roaming\\npm;C:\\Users\\user\\anaconda3;C:\\Users\\user\\anaconda3\\Library;C:\\Users\\user\\anaconda3\\Scripts;C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\bin;C:\\Users\\user\\AppData\\Local\\GitHubDesktop\\bin;C:\\Users\\user\\go\\bin',
  PATHEXT: '.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC;.CPL',
  PROCESSOR_ARCHITECTURE: 'AMD64',
  PROCESSOR_IDENTIFIER: 'Intel64 Family 6 Model 140 Stepping 2, GenuineIntel',
  PROCESSOR_LEVEL: '6',
  PROCESSOR_REVISION: '8c02',
  ProgramData: 'C:\\ProgramData',
  ProgramFiles: 'C:\\Program Files',
  'ProgramFiles(x86)': 'C:\\Program Files (x86)',
  ProgramW6432: 'C:\\Program Files',
  PSModulePath: 'C:\\Users\\user\\Documents\\WindowsPowerShell\\Modules;C:\\Program Files\\WindowsPowerShell\\Modules;C:\\Windows\\system32\\WindowsPowerShell\\v1.0\\Modules;C:\\Program Files (x86)\\Google\\Cloud SDK\\google-cloud-sdk\\platform\\PowerShell',
  PUBLIC: 'C:\\Users\\Public',
  SESSIONNAME: 'Console',
  SystemDrive: 'C:',
  SystemRoot: 'C:\\Windows',
  TEMP: 'C:\\Users\\user\\AppData\\Local\\Temp',
  TMP: 'C:\\Users\\user\\AppData\\Local\\Temp',
  USERDOMAIN: 'NB-T20512B',
  USERDOMAIN_ROAMINGPROFILE: 'NB-T20512B',
  USERNAME: 'user',
  USERPROFILE: 'C:\\Users\\user',
  windir: 'C:\\Windows',
  ZES_ENABLE_SYSMAN: '1',
  TERM_PROGRAM: 'vscode',
  TERM_PROGRAM_VERSION: '1.69.2',
  LANG: 'ko_KR.UTF-8',
  COLORTERM: 'truecolor',
  GIT_ASKPASS: 'c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass.sh',
  VSCODE_GIT_ASKPASS_NODE: 'C:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\Code.exe',
  VSCODE_GIT_ASKPASS_EXTRA_ARGS: '--ms-enable-electron-run-as-node',
  VSCODE_GIT_ASKPASS_MAIN: 'c:\\Users\\user\\AppData\\Local\\Programs\\Microsoft VS Code\\resources\\app\\extensions\\git\\dist\\askpass-main.js',
  VSCODE_GIT_IPC_HANDLE: '\\\\.\\pipe\\vscode-git-f7e61e0525-sock',
  _CONDA_EXE: 'C:\\Users\\user\\anaconda3\\Scripts\\conda.exe',
  _CONDA_ROOT: 'C:\\Users\\user\\anaconda3'
}
0.0526136
C:\Users\user\OneDrive\Project\nodejs\dream_coding
{ user: 46000, system: 46000 }
*/

// call stack 이 끝나고 실행되는 call back 함수
setTimeout(() => {
  console.log('setTimeout');
}, 0);

// call stack이 끝나고 가장 먼저 실행되는 함수
process.nextTick(() => {
  console.log('nextTick');
})

for (let i = 0; i < 100; i++) {
  console.log('for loop')
}

/*
for loop
for loop
for loop
.
.
.
nextTick
setTimeout
*/
