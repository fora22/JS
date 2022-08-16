const http = require("http");
const fs = require("fs");
const ejs = require("ejs");
// const http2 = require('http2'); // https

const name = "YIY";
const courses = [
  { name: "HTML" },
  { name: "CSS" },
  { name: "JS" },
  { name: "Node" },
  { name: "Frontend" },
];

const server = http.createServer((req, res) => {
  const url = req.url; // what?
  const method = req.method; // how?, action?
  if (url === "/courses") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(courses)); // JSON 형태로 리턴
    } else if (method === "POST") {
      const body = [];
      req.on("data", (chunk) => {
        // data란 이벤트가 발생하면,
        console.log(chunk);
        body.push(chunk); // body란 빈 배열에 push
      });

      req.on("end", () => {
        // request에 end라는 이벤트(종료)가 발생하면,
        const bodyStr = Buffer.concat(body).toString(); // Body로 묶은 다음에 String으로
        const course = JSON.parse(bodyStr); // 받은 JSON을 Object 형태로 parse
        courses.push(course); // 새로운 course 추가
        console.log(course);
        res.writeHead(201); // 무조건 응답 해줘야 하므로 201
        res.end();
      });
    }
  }
});

server.listen(8080);
