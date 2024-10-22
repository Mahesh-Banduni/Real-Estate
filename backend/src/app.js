const express = require("express");
const app = express();
const cors = require('cors');
const connectDb = require("./utils/mongodb.connection.config.js");
const {redisClient}= require("./utils/redis.connection.config.js");
const userRoutes = require("./routes/user.route");
const userProfileRoutes= require("./routes/user.profile.route");
const propertyRoutes = require("./routes/property.route.js");
const searchPropertyRoutes = require("./routes/search.property.route.js");
const handpickedPropertyRoutes = require("./routes/handpicked.property.route.js");
const recommendedPropertyRoutes = require("./routes/recommended.property.route.js")
const contactFormRoutes = require("./routes/contact.form.route");
const citySearchRoutes = require("./routes/city.route.js");
const propertyNewRoutes = require("./routes/property.route copy.js");

const { errorHandler } = require("./middleware/errorHandler");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
const PORT = process.env.PORT || 8080;
require('dotenv').config();

connectDb();
//connectRedis();
// Connect to Redis and store the client instance
//const redis = connectRedis();

// Make redis client available throughout the application
app.locals.redis = redisClient;

app.use(cors({
      origin: 'http://localhost:5173'
}));

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/users', userRoutes); 
app.use('/user-profiles', userProfileRoutes);
app.use('/properties', propertyRoutes);
app.use('/search-properties',searchPropertyRoutes);
app.use('/handpicked-properties',handpickedPropertyRoutes);
app.use('/recommended-properties',recommendedPropertyRoutes);
app.use('/contact-forms',contactFormRoutes);
app.use('/cities-localities',citySearchRoutes);
app.use('/properties-new',propertyNewRoutes);

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
  console.log(`Swagger Docs available at http://localhost:${PORT}/api-docs`);
});
