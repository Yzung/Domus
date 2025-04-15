import { Request, Response } from 'express';

export const userController = {
  listar: (req: Request, res: Response) => {
    // Aqui você pode acessar banco de dados, lógica, etc.
    return res.json([{ id: 1, nome: 'Exemplo' }]); // Exemplo de retorno
  },

  // Adicione outros métodos conforme necessário
};