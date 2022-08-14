const http = require('http');
// const http2 = require('http2'); // https certificate가 없으므로 배포시에만 변경할 것

// console.log(http.STATUS_CODES); // Status Code 확인
// console.log(http.METHODS); // Methods 확인

const server = http.createServer((req, res) => { // 서버 생성
  const url = req.url;
  if(url === '/') { // URL 경로
    res.setHeader('Content-Type', 'text/html'); // 이건 그냥 text가 아니라 html이야
    res.write('<html>');
    res.write('<head><title>Academy</title></head>');
    res.write('<body><h1>Welcome!</h1></body>');
    res.write('</html>');
  } else if(url === '/courses') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello</title></head>');
    res.write('<body><h1>Courses</h1></body>');
    res.write('</html>');
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Academy</title></head>');
    res.write('<body><h1>Not Found!</h1></body>');
    res.write('</html>');
  }
  
  res.end(); // 응답 종료
});

server.listen(8080);