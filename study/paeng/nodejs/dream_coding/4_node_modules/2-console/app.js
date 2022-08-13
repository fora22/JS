console.log('logging...');
console.clear();

// log level
console.log('log');     // 개발
console.info('info');   // 중요한 정보
console.warn('warn');   // 경보
console.error('error'); // 에러

// assert
// false 인 경우에만 출력함
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
const student = {name: 'ellie', age: 20, company: {name: 'AC'} };
console.log(student);
console.table(student);
console.dir(student, {showHidden: true, colors: false, depth: 2 });

// measuring time
console.time('for loop');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
// console.count 를 호출한 횟수가 같이 뜸
function a() {
  console.count('a function');
}
a();
a();
console.countReset('a function');
a();

// trace
// 해당 function 의 호출 경로를 보여줌
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.log('f3');
  console.trace();
}

f1();