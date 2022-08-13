console.log(global);

global.hello = () => {
  global.console.log('hello');
}

global.hello();
hello();