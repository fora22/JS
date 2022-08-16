import express from "express";
import fsAsync from "fs/promises";
import {} from "express-async-errors";

const app = express();

app.use(express.json());

app.get("/file1", (req, res) => {});

app.get("/file2", (req, res) => {
  return fsAsync.readFile("/file2.txt");
});

app.get("/file3", async (req, res) => {
  const data = await fsAsync.readFile("/file2.txt");
});

app.use((error, req, res, next) => {
  console.error(error);
  res.status(500).json({ message: "Something went wrong" });
});

app.listen(8080);
