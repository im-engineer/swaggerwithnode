import express from "express";
import bodyParser from "body-parser";
import swaggerUi from "swagger-ui-express";
import SwaggerJsDocs from "./swagger-config";
import path from "path";
import cors from "cors";
import { mongoconnection } from "./db";
import router from "./router/machineRoute";

const app = express();

// Establish MongoDB connection
mongoconnection();

// Enable CORS for all routes
app.use(cors({ origin: "*" }));

// Parse request bodies as JSON
app.use(bodyParser.json());

// Serve Swagger documentation at /api-docs
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(SwaggerJsDocs));

// Serve static files (e.g., Swagger UI) from the "views/dist" directory
app.use(express.static(path.join(__dirname, "views/dist")));

// Serve your application's main HTML file for all other routes
app.get("*", function (req, res) {
  return res.sendFile(path.join(__dirname, "views/dist", "index.html"));
});

// Use the "/user" route for your application
app.use("/user", router);

// Serve static files from the "uploads" directory under "/upload"
app.use("/upload", express.static("uploads"));

// Start the server on a specific port (e.g., 3000)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
