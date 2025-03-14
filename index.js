import express, { json } from "express";
import connectDB from "./config/db.js";
import incidentRoutes from "./routes/incidentRoutes.js";
import swaggerJsdoc from "swagger-jsdoc";
import { serve, setup } from "swagger-ui-express";

const app = express();

// Connect to MongoDB
connectDB();

// Middleware to parse JSON bodies
app.use(json());

// Swagger definition options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Incident Records API",
      version: "1.0.0",
      description: "API documentation",
    },
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Setup Swagger UI
app.use("/api-docs", serve, setup(swaggerSpec));

app.use("/api/incidents", incidentRoutes);

// Start the server.
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
});
