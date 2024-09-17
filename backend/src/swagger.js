const swaggerJSDoc = require('swagger-jsdoc');

// Swagger definition
const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'Real State API Documentation',
    version: '1.0.0',
    description: 'API Documentation for the Express.js Application',
  },
  servers: [
    {
      url: 'http://localhost:8080',  // Update this with your app's base URL
      //description: 'Local server',
    },
  ],
};

// Options for the swagger docs
const options = {
  swaggerDefinition,
  apis: ['src/routes/*.js','src/routes/Agriculture/*.js','src/routes/User/*.js','src/routes/Residential/*.js','src/routes/Commercial/*.js']
    // Path to the API docs
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
