//counter.js
// module.export.<함수명> = <함수명>; 을 통해 외부에서도 import할 수 있다.

let count = 0;

function increase() {
    count++;
}

function getCount() {
    return count;
}


module.exports.getCount = getCount;
// module.exports.increase = increase;
console.log(module.exports === exports); // true
exports = {};
console.log(module.exports === exports); // false
// 밑 코드와 같이 가능하나 exports에 다른값을 할당하게 되는 순간, 
// module.exports로 인식되지 않고, 일반 exports 객체로 인식하게 됨
exports.increase = increase; 
console.log(module);