import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client'; // Importando o Prisma Client

const prisma = new PrismaClient(); // Instanciando o Prisma Client

export const userController = {
  // Listar todos os usuários
  listar: async (req: Request, res: Response): Promise<Response> => {
    try {
      const usuarios = await prisma.user.findMany(); // Consulta para pegar todos os usuários
      return res.status(200).json(usuarios); // Retorna a lista de usuários
    } catch (error) {
      return res.status(500).json({ message: 'Erro ao buscar usuários' });
    }
  },
};
