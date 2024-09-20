const express = require("express");
const app = express();
const connectDb = require("./connection/connection");
const userRoutes = require("./routes/User/user.route");
const userProfileRoutes= require("./routes/User/user.profile.route");
const propertyRoutes = require("./routes/propertyRoutes");
const residentialPlotRoutes = require("./routes/Residential/residential.plot.route");
const residentialFlatRoutes= require("./routes/Residential/residential.flat.route");
const residentialHouseRoutes = require("./routes/Residential/residential.house.route");
const villaRoutes = require("./routes/Residential/residential.villa.route");
const builderFloorApartmentRoutes = require("./routes/Residential/builder.floor.apartment.route");
const penthouseRoutes = require("./routes/Residential/pent.house.route");
const studioApartmentRoutes = require("./routes/Residential/studio.apartment.route");
const commercialOfficeSpaceRoutes = require("./routes/Commercial/commercial.office.space.route");
const ITParkSEZOfficeRoutes = require("./routes/Commercial/IT.park.SEZ.office.space.route");
const commercialShopRoutes = require("./routes/Commercial/commercial.shop.route");
const commercialShowroomRoutes = require("./routes/Commercial/commercial.showroom.route");
const commercialPlotRoutes = require("./routes/Commercial/commercial.plot.route");
const warehouseGodownRoutes = require("./routes/Commercial/warehouse.godown.route");
const industrialPlotRoutes = require("./routes/Commercial/industrial.plot.route");
const industrialBuildingRoutes = require("./routes/Commercial/industrial.building.route");
const industrailShedRoutes = require("./routes/Commercial/industrial.shed.route");
const agriculturePlotRoutes = require("./routes/Agriculture/agriculture.plot.route");
const farmHouseRoutes = require("./routes/Agriculture/farm.house.route");

const { errorHandler } = require("./middleware/errorHandler");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const PORT = process.env.PORT || 8080;
require('dotenv').config();

connectDb();

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/users', userRoutes); 
app.use('/user-profiles', userProfileRoutes);
app.use('/properties', propertyRoutes); 
app.use('/residential-plots', residentialPlotRoutes);
app.use('/residential-flats',residentialFlatRoutes);
app.use('/residential-houses',residentialHouseRoutes);
app.use('/villas',villaRoutes);
app.use('/builder-floor-apartments',builderFloorApartmentRoutes);
app.use('/penthouses',penthouseRoutes);
app.use('/studio-apartments',studioApartmentRoutes);
app.use('/commercial-office-spaces',commercialOfficeSpaceRoutes);
app.use('/it-park-sez-office-spaces', ITParkSEZOfficeRoutes);
app.use('/commercial-shops',commercialShopRoutes);
app.use('/commercial-showrooms',commercialShowroomRoutes);
app.use('/commercial-plots',commercialPlotRoutes);
app.use('/warehouse-godowns',warehouseGodownRoutes);
app.use('/industrial-plots',industrialPlotRoutes);
app.use('/industrial-buildings',industrialBuildingRoutes);
app.use('/industrial-sheds',industrailShedRoutes);
app.use('/agriculture-plots',agriculturePlotRoutes);
app.use('/farm-houses',farmHouseRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
