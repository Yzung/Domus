"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
exports.userController = {
    listar: (req, res) => {
        // Aqui você pode acessar banco de dados, lógica, etc.
        return res.json([{ id: 1, nome: 'Exemplo' }]); // Exemplo de retorno
    },
    // Adicione outros métodos conforme necessário
};
