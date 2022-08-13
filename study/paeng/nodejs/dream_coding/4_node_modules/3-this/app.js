function hello() {
  console.log(this);
  console.log(this === global);   // function scope에서는 this 는 global object
}

hello();

class A {
  constructor(num) {
    this.num = num;
  }
  memberFunction() {
    console.log('--- class ---');
    console.log(this);
    console.log(this === global);   // class scope 안에서는 class instance
  }
}

const a = new A(1);
a.memberFunction();

console.log('--- global scope ---');
console.log(this);
console.log(this === global);     // global scope 안에서 this 는 global object 가 아님(브라우저는 맞음)
console.log(this === module.exports);   // Node.js 에서는 module.exports 임