import swaggerAutogen from 'swagger-autogen';
import { cloud } from '../config';

/* Swagger configuration */
const options = {
  openapi: 'OpenAPI 3', // Enable/Disable OpenAPI. By default is null
  language: 'en-US', // Change response language. By default is 'en-US'
  disableLogs: false, // Enable/Disable logs. By default is false
  autoHeaders: false, // Enable/Disable automatic headers capture. By default is true
  autoQuery: false, // Enable/Disable automatic query capture. By default is true
  autoBody: false, // Enable/Disable automatic body capture. By default is true
};

const doc = {
  info: {
    version: '1.0.0', // by default: '1.0.0'
    title: 'Web3bridge Impact API', // by default: 'REST API'
    description: 'API for Web3bridge impact project v1', // by default: ''
    contact: {
      name: 'API Support',
      email: 'mayowaobi74@gmail.com',
    },
  },
  servers: [
    {
      url: cloud.swagger.url, // by default: 'http://localhost:3000'
      description: 'This is the current deployed server url', // by default: ''
    },
    // { ... }
  ],
  components: {
    schemas: {
      createCohortSchema: {
        $name: 'Cohort I',
        alias: 29,
        $isActive: false,
        $startDate: '2023-12-23',
        $endDate: '2023-12-30',
      },
      createUserSchema: {
        $username: 'Admin one',
        firstName: 'admin',
        lastName: 'lname',
        $email: 'admin@mail.com',
        $isActive: false,
        address: '',
        city: '',
        state: '',
        country: '',
        dob: '',
        phoneNumber: '0901234567',
        $otp: '',
        image: '',
        role: { super: true },
        socialLinks: { twitter: '' },
        $cohortId: '3',
        about: '',
        isBlocked: false,
        requestStatus: 'pending',
        token: '',
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: 'http',
        scheme: 'bearer',
      },
    },
  },
  host: cloud.swagger.host, // by default: 'localhost:3000'
  basePath: '/', // by default: '/'
  // schemes: ['https', 'http'], // by default: ['http']
  consumes: ['application/json'], // by default: ['application/json']
  produces: ['application/json'], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: 'Health',
      description: 'Health Check',
    },
    {
      name: 'Auth',
      description: 'Auth APIs',
    },
    {
      name: 'cohort',
      description: 'Cohort APIs',
    },
    {
      name: 'User', // Tag name
      description: 'User APIs', // Tag description
    },
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {
    healthResponse: {
      code: '100',
      message: 'Status - Inoperational',
    },
    'errorResponse.400': {
      code: '400',
      message: 'BAD REQUEST',
    },
    'errorResponse.403': {
      code: '403',
      message: 'NOT PERMITTED',
    },
    'errorResponse.404': {
      code: '404',
      message: 'Not found',
    },
    'errorResponse.500': {
      code: '500',
      message: 'Server Error',
    },
  }, // by default: empty object (Swagger 2.0)
};

const outputFile = './swagger.json';
// const endpointsFiles = ['./app.js', './controllers/*.js', './routes/*.ts'];
const endpointsFiles = ['../index.ts'];

/* NOTE: if you use the express Router, you must pass in the 
   'endpointsFiles' only the root file where the route starts,
   such as: index.js, app.js, routes.js, ... */
swaggerAutogen({ openapi: '3.0.0' })(outputFile, endpointsFiles, doc);
// swaggerAutogen(options)(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     require('./index.js'); // Your project's root file
//   });
