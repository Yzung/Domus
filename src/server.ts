import express from 'express';
import dotenv from 'dotenv';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec from '../docs/swagger';


dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.DB_HOST || 'localhost';

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.listen(PORT, 'localhost', () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});