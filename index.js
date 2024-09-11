const express = require("express");
const app = express();
const connectDb = require("./connection/connection");
const userRoutes = require("./routes/userRoutes");
const userProfileRoutes= require("./routes/userProfileRoutes");
const propertyRoutes = require("./routes/propertyRoutes")
const { errorHandler } = require("./middleware/errorHandler");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const PORT = process.env.PORT || 8000;
require('dotenv').config();

connectDb();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/users", userRoutes); 
app.use("/userProfiles", userProfileRoutes);
app.use("/properties", propertyRoutes); 

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
