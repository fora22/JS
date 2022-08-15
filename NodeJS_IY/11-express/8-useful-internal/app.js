import express from "express";

const app = express();

// express.json -> REST API, Body를 parsing할 때
// app.use(express.json());
// express.urlencoded -> HTML form Body안으로 parsing
// app.use(express.urlencoded({ extended: false }));
// express.static -> 자동으로 내부 이미지나 html 등을 읽을 수 있게 함
// app.use(express.static("public", options));

app.use(express.json());
app.post("/posts", (req, res) => {
  console.log(req.body);
  res.status(201).send("Thanks, Created");
});

const options = {
  dotfiles: "ignore", // 숨겨진 파일 무시
  etag: false,
  index: false,
  maxAge: "1d", // 얼마나 오랫동안 캐싱이 가능한지
  redirect: false,
  setHeaders: function (res, path, stat) {
    res.set("x-timestamp", Date.now()); // 필요한 데이터 헤더에 추가
  },
};

app.use(express.static("public", options));
app.listen(8080);
