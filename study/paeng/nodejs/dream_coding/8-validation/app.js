import express from 'express';
import { body, param, validationResult } from 'express-validator';

const app = express();
app.use(express.json());

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  return res.status(400).json({ message: errors.array()[0].msg });
};

app.post(
  '/users',
  [
    body('name').trim().isLength({ min: 2 }).withMessage('이름은 두글자 이상!'), // trim 은 공백 제거
    body('age').isInt().withMessage('숫자를 입력해'),
    body('email').isEmail().withMessage('이메일 입력해요').normalizeEmail(), // normalizeEmail() 대문자 -> 소문자 등 이메일 형식에 맞춰서 정상화 시켜줌
    body('job.name').notEmpty(),
    validate,
  ],
  (req, res, next) => {
    console.log(req.body);
    res.sendStatus(201);
  }
);

app.get(
  '/:email',
  [param('email').isEmail().withMessage('이메일 입력해요'), validate],
  (req, res, next) => {
    res.send('💌');
  }
);

app.listen(8080);
