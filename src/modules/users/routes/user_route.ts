import { Router } from 'express';
import { userController } from '../controllers/user_controller';

const router = Router();

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Retorna todos os usuários
 *     responses:
 *       200:
 *         description: Lista de usuários
 */

export default router;
