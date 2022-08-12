const candyMachine = {
  status: {
    name: 'node',
    count: 5,
  },
  getCandy() {
    this.status.count--;
    return this.status.count;
  },
};
const { getCandy, status: { count } } = candyMachine;

console.log(getCandy);
console.log(count);

// ƒ getCandy() {
//   this.status.count--;
//   return this.status.count;
// }
// 5

