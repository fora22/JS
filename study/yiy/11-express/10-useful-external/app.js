import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import cors from "cors";
import helmet from "helmet";

// http://expressjs.com/en/resources/middleware/morgan.html
const app = express();

// cookie-parser
// morgan
// cors
// helmet

// cookie-parser
// key: Cookie
// value: yummy_cookie=choco; tasty_cookie=strawberry

const corsOptions = {
  origin: ["http://localhost:3000"],
  optionsSuccessStatus: 200, // for options request
  credentials: true, // Access-Control-Allow-Credentials: true
};

app.use(express.json());
app.use(cookieParser()); // http://expressjs.com/en/resources/middleware/cookie-parser.html
app.use(morgan("common")); // http://expressjs.com/en/resources/middleware/morgan.html
app.use(cors(corsOptions));
app.use(helmet()); // https://github.com/helmetjs/helmet

app.get("/", (req, res) => {
  console.log("req.body :: ", req.body); // undefined. app.use(express.json())을 사용했어야 함
  console.log("req.cookies :: ", req.cookies); // it will be undefined without cookie-parser (마찬가지)
  console.log("yummy_cookie :: ", req.cookies.yummy_cookie);
  res.send("Welcome!");
});

app.listen(8080);
