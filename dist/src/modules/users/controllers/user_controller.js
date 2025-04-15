"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const client_1 = require("@prisma/client"); // Importando o Prisma Client
const prisma = new client_1.PrismaClient(); // Instanciando o Prisma Client
exports.userController = {
    // Listar todos os usuários
    listar: async (req, res) => {
        try {
            const usuarios = await prisma.user.findMany(); // Consulta para pegar todos os usuários
            return res.status(200).json(usuarios); // Retorna a lista de usuários
        }
        catch (error) {
            return res.status(500).json({ message: 'Erro ao buscar usuários' });
        }
    },
};
