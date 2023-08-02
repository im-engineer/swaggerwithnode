import express from 'express'
import bodyParser from 'body-parser'
import swaggerUi from 'swagger-ui-express';
import SwaggerJsDocs from './config/config';
const app = express();
import cors from 'cors'
import {mongoconnection} from './db';
mongoconnection();
app.use(cors({origin:"*"}));
import router from "./router/machineRoute"

app.use(bodyParser.urlencoded(
    {
        extended:true
    }));
app.use(bodyParser.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(SwaggerJsDocs));
app.use("/user",router)
app.use("/upload",express.static("uploads"))

export default app;