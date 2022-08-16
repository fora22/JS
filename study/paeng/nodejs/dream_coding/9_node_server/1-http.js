const http = require('http');
const fs = require('fs');
// https -> Local에서 개발할 때는 secure 적용이 힘드므로 http로 개발하고 deploy할 때 적용
// const http2 = require('http2');

const server = http.createServer((req, res) => {
  console.log("incoming...");
  console.log(req.headers);
  console.log(req.httpVersion);
  console.log(req.method);
  console.log(req.url);
  const url = req.url;
  if (url === "/") {
    res.setHeader('Content-Type', 'text/html');
    const read = fs.createReadStream('./html/index.html');
    read.pipe(res);
  } else if (url === '/courses') {
    res.setHeader('Content-Type', 'text/html');
    const read = fs.createReadStream('./html/courses.html');
    read.pipe(res);
  } else {
    res.setHeader('Content-Type', 'text/html');
    const read = fs.createReadStream('./html/not-found.html');
    read.pipe(res);
  }
});

server.listen(8080);
