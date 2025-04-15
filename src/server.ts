import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.DB_HOST || '192.168.163.41';

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Servidor Domus rodando 🚀');
});

/*app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
*/

app.listen(PORT, '192.168.163.41', () => {
  console.log(`✅ Servidor rodando na porta ${PORT} e acessível em todas as interfaces.`);
});