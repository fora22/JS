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
exports.increase = increase; // 이것도 가능하나 exports에 다른값을 할당하게 되는 순간 module.exports로 인식되지 않고, 일반 exports 객체로 인식하게 됌
console.log(module);