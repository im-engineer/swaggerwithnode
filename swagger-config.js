/*
 * @file: swagger-config.js
 * @description: It Contain swagger configrations.
 * @author: Siddhant Singh
 */
import swaggerJsDocs from "swagger-jsdoc";
var config = require('./config/config');
console.log(config,"swaggerOptions")
const { swaggerURL, swaggerPort } = config.get(process.env.Node_env).app;
console.log(swaggerURL,swaggerPort)

const swaggerOptions = {
    swaggerDefinition: {
      info: {
        title: "Swagger implementation with node",
        version: "1.0",
        description: "All api end points",
        contact: {
          name: "Siddhant Singh"
        },
        servers: [`${swaggerURL}`]
      },
      produces: ["application/json"],
      host: `${swaggerPort}`
    },
    apis: [
  
    
    ],
    layout: "AugmentingLayout"
};
console.log(swaggerOptions,"swaggerOptions")

export default swaggerJsDocs(swaggerOptions);
