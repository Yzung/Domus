import express from 'express';
const userRouter = require('./modules/routes/user_route');

const app = express();
app.use(express.json()); // necessário para o req.body funcionar


app.use('/api', userRouter);

app.listen(3000, () => {
  console.log('Servidor rodando na porta 3000');
});