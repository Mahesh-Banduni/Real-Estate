const express = require("express");
const app = express();
const cors = require('cors');
const helmet = require('helmet');
// const expressPino = require('express-pino-logger');
// const logger = require('./configs/winston.config.js');
const crypto = require('crypto');
const compression = require("compression");
const connectDb = require("./configs/mongodb.connection.config.js");
const userRoutes = require("./routes/user.route");
const userAuthRoutes = require("./routes/user.login.route.js");
const userProfileRoutes= require("./routes/user.profile.route");
const propertyRoutes = require("./routes/property.route.js");
const searchPropertyRoutes = require("./routes/search.property.route.js");
const handpickedPropertyRoutes = require("./routes/handpicked.property.route.js");
const recommendedPropertyRoutes = require("./routes/recommended.property.route.js");
const exchangePropertyRoutes = require("./routes/exchange.property.route.js");
const ownedPropertyRoutes = require("./routes/owned.property.route.js");
const favoritePropertyRoutes = require("./routes/favorite.property.route.js");
const contactFormRoutes = require("./routes/contact.form.route");
const propertyInquiry = require("./routes/property.inquiry.route.js");
const citySearchRoutes = require("./routes/city.route.js");
const auctionPropertyRoutes = require("./routes/auction.property.route.js");
const allAuctionPropertyRoutes = require("./routes/all.auction.property.route.js");
const auctionPropertyInquiry = require("./routes/auction.property.inquiry.route.js");
const { generalLimiter } = require('./middleware/rate.limitter.js');
const { requestCounter } = require('./middleware/req.count.js');

const { errorHandler } = require("./middleware/error.handler.js");
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger');
require('dotenv').config();

connectDb();

app.use(generalLimiter);
app.use(requestCounter);

app.use(compression());

app.use(cors({
      origin: [`http://${process.env.ORIGIN}:${process.env.ORIGIN_PORT}`,'192.168.137.159:8080'],
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
app.use('/exchange-properties',exchangePropertyRoutes);
app.use('/owned-properties',ownedPropertyRoutes);
app.use('/favorite-properties',favoritePropertyRoutes);
app.use('/all-auction-properties',allAuctionPropertyRoutes);
app.use('/property-inquiry', propertyInquiry);
app.use('/auction-property-inquiry', auctionPropertyInquiry);
app.use(errorHandler);

// // Request Logger Middleware (using express-pino)
// app.use(expressPino({ logger }));

// // Global error handling for uncaught exceptions and unhandled rejections
// process.on('uncaughtException', (err) => {
//   logger.error(`Uncaught Exception: ${err.message}`);
//   process.exit(1); // Exit process after logging the error
// });

// process.on('unhandledRejection', (reason, promise) => {
//   logger.error(`Unhandled Rejection: ${reason}`);
//   process.exit(1); // Exit process after logging the error
// });

// // Gracefully shutdown the application on SIGINT or SIGTERM
// const shutdown = () => {
//   logger.info(`Worker ${process.pid} shutting down gracefully.`);
//   process.exit(0); // Gracefully shutdown
// };

// // Handle signals for graceful shutdown
// process.on('SIGINT', shutdown);
// process.on('SIGTERM', shutdown);

app.listen(process.env.SOURCE_PORT, () => {
  console.log(`App is listening at port ${process.env.SOURCE_PORT}`);
  console.log(`Swagger Docs available at http://${process.env.SOURCE}:${process.env.SOURCE_PORT}/api-docs`);
});