"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Domus API',
            version: '1.0.0',
            description: 'Documentação da API Domus',
        },
        servers: [
            {
                url: 'http://localhost:3000/docs', // ou o IP configurado
            },
        ],
    },
    apis: ['./src/*.ts'], // arquivos onde estarão os comentários das rotas
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(options);
exports.default = swaggerSpec;
