const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger-output.json';
const endpointsFiles = ['./routes/contactRoutes'];

const config = {
  info: {
    title: 'Contacts API',
    description: 'API for contact storage and Management',
  },
  host: 'localhost:3000',
  schemes: ['http'],
  components: {
    schemas: require('./swagger/schemas/contactSchema'),
  },
};

swaggerAutogen(outputFile, endpointsFiles, config);
