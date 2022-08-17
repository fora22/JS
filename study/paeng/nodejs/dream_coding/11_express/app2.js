import express from 'express';

const app = express();

app.use(express.json());

app.use('/posts', postRouter);


app.listen(8080);
