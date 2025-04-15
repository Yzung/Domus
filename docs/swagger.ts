import swaggerJSDoc from 'swagger-jsdoc';

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

const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;
