import express from "express";
import userRouter from "./routes/user.js";
import postRouter from "./routes/post.js";

const app = express();

app.use(express.json());

// 다른 파일에 매핑할 수 있음.
app.use("/users", userRouter);
app.use("/posts", postRouter);

app.listen(8080);
