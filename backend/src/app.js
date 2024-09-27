const express = require("express");
const app = express();
const connectDb = require("./connection/connection");
const userRoutes = require("./routes/User/user.route");
const userProfileRoutes= require("./routes/User/user.profile.route");
const propertyRoutes = require("./routes/property.route.js");
const searchPropertyRoutes = require("./routes/search.property.route.js");
const handpickedPropertyRoutes = require("./routes/handpicked.property.route.js");
const contactFormRoutes = require("./routes/contact.form.route");

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
app.use('/search-properties',searchPropertyRoutes);
app.use('/handpicked-properties',handpickedPropertyRoutes);
app.use('/contact-forms',contactFormRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
