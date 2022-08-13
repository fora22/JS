const os = require('os');

// 현재 설정된 줄바꿈 확인
console.log(os.EOL === '\n'); // false
console.log(os.EOL === '\r\n'); // true

// OS 정보 확인
console.log(os.totalmem()); // 34047377408
console.log(os.freemem()); // 21779279872
console.log(os.type()); // Windows_NT
console.log(os.userInfo()); // {uid: -1, gid: -1, username: 'user', homedir: 'C:\Users\user', shell: null}
console.log(os.cpus());

/*
false
true
16867508224
9197989888
Windows_NT
{
  uid: -1,
  gid: -1,
  username: 'user',
  homedir: 'C:\\Users\\user',
  shell: null
}
[
  {
    model: '11th Gen Intel(R) Core(TM) i5-1155G7 @ 2.50GHz',
    speed: 2496,
    times: {
      user: 1702343,
      nice: 0,
      sys: 2197156,
      idle: 68026218,
      irq: 373046
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1155G7 @ 2.50GHz',
    speed: 2496,
    times: {
      user: 1466781,
      nice: 0,
      sys: 1092828,
      idle: 69365906,
      irq: 21078
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1155G7 @ 2.50GHz',
    speed: 2496,
    times: {
      user: 2589625,
      nice: 0,
      sys: 1458265,
      idle: 67877609,
      irq: 23750
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1155G7 @ 2.50GHz',
    speed: 2496,
    times: {
      user: 1945953,
      nice: 0,
      sys: 1392578,
      idle: 68586984,
      irq: 18296
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1155G7 @ 2.50GHz',
    speed: 2496,
    times: {
      user: 2086015,
      nice: 0,
      sys: 1534781,
      idle: 68304703,
      irq: 20359
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1155G7 @ 2.50GHz',
    speed: 2496,
    times: {
      user: 1632671,
      nice: 0,
      sys: 1194609,
      idle: 69098218,
      irq: 16531
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1155G7 @ 2.50GHz',
    speed: 2496,
    times: {
      user: 1830156,
      nice: 0,
      sys: 1325453,
      idle: 68769890,
      irq: 19421
    }
  },
  {
    model: '11th Gen Intel(R) Core(TM) i5-1155G7 @ 2.50GHz',
    speed: 2496,
    times: {
      user: 1747343,
      nice: 0,
      sys: 1137125,
      idle: 69041031,
      irq: 15343
    }
  }
]
*/