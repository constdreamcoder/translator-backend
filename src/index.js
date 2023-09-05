import express from "express";
import bodyParser from "body-parser";
import "dotenv/config";

// Swagger
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import { options } from "../swagger/swagger.config.js";
import router from "./routes/index.js";

const app = express();
const port = 3000;

// swagger
const swaggerSpec = swaggerJsdoc(options);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// routers
app.use("/", router);
app.use("/translate", router);
app.use("/audio/play", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
