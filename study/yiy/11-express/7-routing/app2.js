import express from "express";

const app = express();

app.use(express.json());

// 요청 주소에 따라 post get을 묶을 수 있다.
app
  .route("/posts")
  .get((req, res) => {
    res.status(201).send("GET: /posts");
  })
  .post((req, res) => {
    res.status(201).send("POST: /posts");
  });

app
  .route("/posts/:id")
  .put((req, res) => {
    res.status(201).send("PUT: /posts/:id");
  })
  .delete((req, res) => {
    res.status(201).send("DELETE: /posts/:id");
  });

app.listen(8080);
