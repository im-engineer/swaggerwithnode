import swaggerJsDocs from "swagger-jsdoc";
import config from './config/config';
const { host, port } = config.get('app');
console.log(host,port)
