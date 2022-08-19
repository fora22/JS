import express from "express";
import "express-async-errors";

const tweets = [
  {
    id: "1",
    text: "드림코더분들 화이팅!",
    createdAt: Date.now().toString,
    name: "bob",
    username: "bob",
    url: "https://www.checkpoint.com/wp-content/uploads/what-is-web-application-firewall.jpg",
  },
  {
    id: "2",
    text: "안녕",
    createdAt: Date.now().toString,
    name: "Ellie",
    username: "ellie",
  },
];

const router = express.Router();

// GET /tweets
// GET /tweets?username=:username
router.get("/", (req, res, next) => {
  const username = req.query.username; // 없다면 undefined
  const data = username
    ? tweets.filter((t) => t.username === username)
    : tweets;
  res.status(200).json(data);
});

// GET /tweets/:id
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  const tweet = tweets.find((t) => t.id === id);
  if (tweet) {
    res.status(200).json(tweet);
  } else {
    return res.status(404).json({ message: `Twweet id(${id}) not found` }); // sendStatus(404)는 json 보내지지 않음.
  }
});

// POST /tweets
// PUT /tweets/:id
// DELETE /tweets/:id

export default router;
