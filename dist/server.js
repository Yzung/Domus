"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.DB_HOST || '1.2.3.3';
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('Servidor Domus rodando 🚀');
});
/*app.listen(PORT, () => {
  console.log(`✅ Servidor rodando na porta ${PORT}`);
});
*/
app.listen(PORT, '1.2.3.3', () => {
    console.log(`✅ Servidor rodando na porta ${PORT} e acessível em todas as interfaces.`);
});
