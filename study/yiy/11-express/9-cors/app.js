import express from "express";
import cors from "cors";

const app = express();

// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', 'http://127.0.0.1:5500');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, DELETE'
//   );
//   next();
// });

// app.use(cors()); // 매우 간단함!
app.use(
  cors({
    origin: ["http://127.0.0.1:5500"], // 해당 URL에서만 CORS정책 허용하게 할 수도 있음
    optionsSuccessStatus: 200, // 200, 자동으로 응답하도록
    credentials: true, // 헤더에 토큰이나 사용자 정보를 추가하도록 허용
  })
);

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.listen(8080);
