const os = require('os');

console.log(os.EOL === '\n'); // false
console.log(os.EOL === '\r\n'); // true

console.log(os.totalmem()); // 34047377408
console.log(os.freemem()); // 21779279872
console.log(os.type()); // Windows_NT
console.log(os.userInfo()); // {uid: -1, gid: -1, username: 'user', homedir: 'C:\Users\user', shell: null}
console.log(os.cpus()); // (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
console.log(os.homedir()); // C:\Users\user
console.log(os.hostname()); // NB-D20618A
