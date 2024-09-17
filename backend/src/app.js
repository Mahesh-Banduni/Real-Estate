const express = require("express");
const app = express();
const connectDb = require("./connection/connection");
const userRoutes = require("./routes/User/userRoutes");
const userProfileRoutes= require("./routes/User/userProfileRoutes");
const propertyRoutes = require("./routes/propertyRoutes");
const residentialPlotRoutes = require("./routes/Residential/residentialPlotRoutes");
const flatRoutes= require("./routes/Residential/flatRoutes");
const residentialHouseRoutes = require("./routes/Residential/residentialHouseRoutes");
const villaRoutes = require("./routes/Residential/villaRoutes");
const builderFloorApartmentRoutes = require("./routes/Residential/builderFloorApartmentRoutes");
const { errorHandler } = require("./middleware/errorHandler");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const PORT = process.env.PORT || 8080;
require('dotenv').config();

connectDb();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use("/users", userRoutes); 
app.use("/userProfiles", userProfileRoutes);
app.use("/properties", propertyRoutes); 
app.use("/residentialPlots", residentialPlotRoutes);
app.use("/flats",flatRoutes);
app.use("/residentialHouses",residentialHouseRoutes);
app.use("/villas",villaRoutes);
app.use("/builderFloorApartments",builderFloorApartmentRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
