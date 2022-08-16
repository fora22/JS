console.log('code1');
console.time('timeout 0');
setTimeout(() => {
  console.log('setTimeout 0'); 
  console.timeEnd('timeout 0'); 
	// 정확하게 0ms에 도달하진 않고 1.8ms정도가 걸림 (콜스택 때문)
	// 콜스택이 많아지면 많아질수록 더 오래걸림
}, 0);

console.log('code2');
setImmediate(() => {
  console.log('setImmediate');
});

console.log('code3');
process.nextTick(() => {
  console.log('process.nextTick');
});

/*
code1
code2
code3
process.nextTick
setTimeout 0
timeout 0: 1.872ms
setImmediate
*/