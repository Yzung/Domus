import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../docs/swagger';
import user_route from "../src/modules/users/routes/user_route"

dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.DB_HOST || 'localhost';

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/usuarios', user_route);

app.listen(PORT, 'localhost', () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});