const swaggerDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const contactSchema = require('./schemas/contactSchema');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Contact API',
      version: '1.0.0',
      description: 'API for contact storage and Management',
    },
    servers: [
      {
        url: 'http://localhost:3000/api/v1',
      },
    ],
    components: {
      schemas: {
        Contact: contactSchema,
      },
    },
  },
  apis: ['./routes/*.js'], // Path to the API docs
};
const specs = swaggerDoc(options);

module.exports = app => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
  app.get('/api-docs.json', (req, res) => {
    res.json(specs);
  });
};
