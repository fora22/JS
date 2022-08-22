import express from "express";
import { body, param, validationResult } from "express-validator";

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  // 전체 에러메시지가 아닌 첫번째 에러메시지만 보내고 싶을 경우
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  "/users",
  [
    body("name")
      .notEmpty()
      .withMessage("이름을 입력해")
      .isLength({ min: 2 })
      .withMessage("이름은 두 글자 이상!"),
    body("age").notEmpty().isInt().withMessage("숫자를 입력해"),
    body("email").isEmail().withMessage("이메일 입력해"),
    body("job.name").notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  "/:email",
  [param("email").isEmail().withMessage("이메일 입력해"), validate],
  (req, res, next) => {
    res.send("📧");
  }
);

app.listen(8080);

// POST 양식
// const request_body = {
//   "name": "El",
//   "age": 1,
//   "job": {
//     "name": "DC Academy",
//     "title": "Instructor"
//   },
//   "email": "ellie@server.com"
// };
