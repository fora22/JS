import express from "express";
const app = express();

app.use(express.json()); // JSON 형식의 request를 받기위함

app.post("/", (req, res, next) => {
  console.log(req.body);
});

app.listen(8080);
