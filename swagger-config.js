/*
 * @file: swagger-config.js
 * @description: It Contain swagger configrations.
 * @author: Siddhant Singh
 */
import swaggerJsDocs from "swagger-jsdoc";
import config from "config";
const { swaggerURL, swaggerPort } = config.app;

console.log(swaggerURL);

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: "Swagger implementation with node",
      version: "1.0",
      description: "All API endpoints",
      contact: {
        name: "Siddhant Singh",
      },
      servers: [`${swaggerURL}`],
    },
    produces: ["application/json"],
    host: `${swaggerPort}`,
  },
  apis: ["./router/machineRoute.js", "./app.json"], // Add the path to your route file
  layout: "AugmentingLayout",
};

export default swaggerJsDocs(swaggerOptions);
