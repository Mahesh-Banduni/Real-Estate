const redisService = require('./redis.service');
const twilioService = require('./twilio.service');

// Generate a 6-digit OTP
const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

// Store OTP in Redis with expiration and send OTP via Twilio
const sendAndStoreOTP = async (userId, phone) => {
  const otp = generateOTP();

  // Store OTP in Redis with 5-minute expiration
  await redisService.setOTP(`otp:${userId}`, otp);

  // Send OTP via Twilio
  await twilioService.sendOTP(phone, otp);
};

const verifyOTP = async (userId, otp) => {
  const storedOtp = await redisService.getOTP(`otp:${userId}`);

  if (storedOtp === otp) {
    await redisService.deleteOTP(`otp:${userId}`);
    return true;
  }

  return false;
};

module.exports = { sendAndStoreOTP, verifyOTP };
