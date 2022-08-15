import express from "express";
const app = express();

// all -> GET, POST, PUT, DELETE 상관없이 해당 기능이 동작(해당 경로에 한해서만 하위는 해당 X)
// 하위경로 포함하려면 "/api/*"로 명시해야 함
app.all("/api", (req, res, next) => {
  console.log("all");
  next();
});

// use -> GET, POST, PUT, DELETE 상관없이 해당 기능이 동작(해당 경로 및 하위 경로 포함)
app.use("/sky", (req, res, next) => {
  console.log("use");
  next();
});

app.get(
  "/",
  (req, res, next) => {
    console.log("first");

    // 특정 조건문을 통해 response가 나뉠 경우, 꼭 return을 붙여줘야 함.
    if (true) {
      return res.send("Hello");
    }
    res.send("In Young");

    // next(); // first2로 넘어감
    // next("route"); // first2를 지나지 않고 second로 넘어감
    // next(new Error("error")); // 에러 발생 시킴
    // res.send("Hello!"); // response를 보냈기때문에 first2, second로 넘어가지 않음
  },
  (req, res, next) => {
    console.log("first2");
    next();
  }
);

app.get("/", (req, res, next) => {
  console.log("second");
});

// 최종적으로 어떠한 Get요청에도 해당하지 않을 경우의 Handler
app.use((req, res, next) => {
  res.status(404).send("Not Available!!");
});

// Error Handler
app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).send("Sorry, try later!");
});

app.listen(8080);
