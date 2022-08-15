import express from "express";
const app = express();

app.get("/", (req, res, next) => {
  console.log("get");
  res.send("hi"); // 보내주지 않으면 기다리기 때문에 반드시 res 보내줘야 함.
});
app.listen(8080); // Port 지정 및 시작
