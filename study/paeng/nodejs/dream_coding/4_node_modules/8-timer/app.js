let num = 1;

// setInterval 은 중지시키지 않는 한 계속 실행됨
const interval = setInterval(() => {
  console.log(num++);
}, 1000);

// 6초 뒤 실행되는 함수 set
setTimeout(() => {
  console.log('Timeout!');
  clearInterval(interval);  // interval clear 함
}, 6000)

/*
1
2
3
4
5
Timeout!
*/