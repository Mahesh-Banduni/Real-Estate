const express = require("express");
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const crypto = require('crypto');
const connectDb = require("./configs/mongodb.connection.config.js");
const userRoutes = require("./routes/user.route");
const userAuthRoutes = require("./routes/user.login.route.js");
const userProfileRoutes= require("./routes/user.profile.route");
const propertyRoutes = require("./routes/property.route.js");
const searchPropertyRoutes = require("./routes/search.property.route.js");
const handpickedPropertyRoutes = require("./routes/handpicked.property.route.js");
const recommendedPropertyRoutes = require("./routes/recommended.property.route.js")
const contactFormRoutes = require("./routes/contact.form.route");
const citySearchRoutes = require("./routes/city.route.js");
const propertyNewRoutes = require("./routes/property.route copy.js");
const auctionPropertyRoutes = require("./routes/auction.property.route.js");

const { errorHandler } = require("./middleware/errorHandler");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
require('dotenv').config();

connectDb();

app.use(cors({
      origin: [`http://${process.env.ORIGIN}:${process.env.ORIGIN_PORT}`],
      methods: ['GET', 'POST', 'PUT','PATCH','DELETE'], // Restrict methods
      allowedHeaders: ['Content-Type', 'Authorization'], 
}));

// Middleware to generate a CSP nonce
app.use((req, res, next) => {
  res.locals.cspNonce = crypto.randomBytes(32).toString('base64'); // Use 32 bytes for better performance while retaining good randomness
  next();
});

// Configure Helmet with improved security headers
app.use(
  helmet({
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        defaultSrc: ["'self'"],
        scriptSrc: ["'self'", (req, res) => `'nonce-${res.locals.cspNonce}'`], // Proper function-based nonce usage
        styleSrc: ["'self'",  (req, res) => `'nonce-${res.locals.cspNonce}'`], // Avoid 'unsafe-inline' when possible
        imgSrc: ["'self'", "data:"],
        objectSrc: ["'none'"],
        fontSrc: ["'self'"],
        frameSrc: ["'self'"],
        baseUri: ["'self'"],
        formAction: ["'self'"],
        frameAncestors: ["'none'"],
        upgradeInsecureRequests: [], // Enables automatic upgrade to HTTPS
      },
    },
    crossOriginEmbedderPolicy: { policy: "require-corp" },
    crossOriginOpenerPolicy: { policy: "same-origin" },
    crossOriginResourcePolicy: { policy: "same-origin" },
    referrerPolicy: { policy: "strict-origin-when-cross-origin" },
    strictTransportSecurity: {
      maxAge: 31536000, // One year in seconds
      includeSubDomains: true,
      preload: true,
    },
    xContentTypeOptions: true,
    dnsPrefetchControl: { allow: false },
    frameguard: { action: 'deny' }, // Correcting usage (consistent terminology)
    originAgentCluster: true,
  })
);

app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/users', userRoutes); 
app.use('/user-profiles', userProfileRoutes);
app.use('/userauth', userAuthRoutes);
app.use('/properties', propertyRoutes);
app.use('/search-properties',searchPropertyRoutes);
app.use('/handpicked-properties',handpickedPropertyRoutes);
app.use('/recommended-properties',recommendedPropertyRoutes);
app.use('/contact-forms',contactFormRoutes);
app.use('/cities-localities',citySearchRoutes);
app.use('/auction-properties',auctionPropertyRoutes);
app.use('/properties-new',propertyNewRoutes);

app.use(errorHandler);

app.listen(process.env.SOURCE_PORT, () => {
  console.log(`App is listening at port ${process.env.SOURCE_PORT}`);
  console.log(`Swagger Docs available at http://${process.env.SOURCE}:${process.env.SOURCE_PORT}/api-docs`);
});