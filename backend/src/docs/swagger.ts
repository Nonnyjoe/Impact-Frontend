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
  host: cloud.swagger.host, // by default: 'localhost:3000'
  basePath: '/', // by default: '/'
  schemes: ['https'], // by default: ['http']
  consumes: ['application/json'], // by default: ['application/json']
  produces: ['application/json'], // by default: ['application/json']
  tags: [
    // by default: empty Array
    {
      name: 'User CRUD', // Tag name
      description: 'User APIs', // Tag description
    },
    {
      name: 'Health',
      description: 'Health Check',
    },
    {
      name: 'Cohort',
      description: 'Cohort APIs',
    },
  ],
  securityDefinitions: {}, // by default: empty object
  definitions: {
    helathResponse: {
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
swaggerAutogen(outputFile, endpointsFiles, doc);

// swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
//     require('./index.js'); // Your project's root file
//   });
