import express from "express";
const app = express();

app.get("/sky/:id", (req, res, next) => {
  // console.log(req.path);
  // console.log(req.headers);
  console.log(req.params);
  console.log(req.params.id);
  console.log(req.query);
  console.log(req.query.keyword);

  // res.json({ name: "IY" }); // {"name":"IY"}
  // res.sendStatus(400); // Bad Request
  res.setHeader("key", "value"); // Response Headers에 포함
  res.status(201).send("created"); // created
});
app.listen(8080);
