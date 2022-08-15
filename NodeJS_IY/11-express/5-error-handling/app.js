import express from "express";
import fs from "fs";
import fsAsync from "fs/promises";

const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {
  // 1. 비동기적 처리 : 콜백함수로 전달만 되었기 때문에 내부만 error가 발생. error 처리를 해야함
  // fs.readFile("/file1.txt", (err, data) => {
  //   if (err) {
  //     // res.sendStatus(404);
  //     res.status(404).send("File Not Found");
  //   }
  // });

  // 2. 동기적 처리
  try {
    const data = fs.readFileSync("/file1.txt");
  } catch (error) {
    // res.sendStatus(404);
    res.status(404).send("File Not Found");
  }
});

// 3. Promise 처리 : Promise도 동기적처리와 마찬가지로 catch로 error 처리를 해야함.
app.get("/file2", (req, res) => {
  fsAsync
    .readFile("/file2.txt") //
    .catch((error) => {
      // res.sendStatus(404);
      res.status(404).send("File Not Found");
    });
});

// 4. async 처리 : await는 동기적이나 Promise와 같이 내부적으로만 error 발생
app.get("/file3", async (req, res) => {
  try {
    const data = await fsAsync.readFile("/file2.txt");
  } catch {
    // res.sendStatus(404);
    res.status(404).send("File Not Found");
  }
});

// 버전 5 이하에서는: require('express-async-errors');

// Express 5 부터는 이렇게
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
