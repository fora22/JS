// app.js
import express from 'express';
import cors from 'cors';

// client cookie 를 읽게 해주는 package
import cookieParser from 'cookie-parser';

// 요청에 따른 log를 남겨주는 package
import morgan from 'morgan';

// 보안에 필요한 header를 자동으로 추가 해줌
import helmet from 'helmet';

const app = express();

const corsOptions = {
  origin: ['http://127.0.0.1:5500'],
  optionsSuccessStatus: 200,
  credentials: true,  // Access-Control-Allow-Credentials: true 와 동일
};

// REST API, body를 json으로 읽게 해줌
app.use(express.json());

app.use(cookieParser());
// { key: 'value', paeng: 'daewon' }

app.use(morgan('combined'));
// ::1 - - [15/Aug/2022:14:01:19 +0000] "GET / HTTP/1.1" 200 8 "-" "PostmanRuntime/7.29.2"

app.use(helmet());
// helmetjs.github.io

app.use(cors(corsOptions));

app.get('/', (req, res) => {
  console.log(req.body);
  console.log(req.cookies);
  res.send('Welcome!');
})

app.listen(8080);
