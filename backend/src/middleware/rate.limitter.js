const rateLimit = require('express-rate-limit');

const createRateLimiter = (maxRequests, windowMinutes, message) => rateLimit({
    windowMs: windowMinutes * 60 * 1000,
    max: maxRequests,
    message: {
      status: 429,
      message,
    },
});
  
const registerLimiter = createRateLimiter(5, 15, 'Too many registration attempts, please try again after 15 minutes');
const loginLimiter = createRateLimiter(20, 15, 'Too many login attempts, please try again after 15 minutes');
const generalLimiter = createRateLimiter(150, 5, 'Too many requests, please try again later');
  
module.exports = {
  registerLimiter,
  loginLimiter,
  generalLimiter
};
