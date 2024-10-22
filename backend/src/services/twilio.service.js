const twilio = require('twilio');
const dotenv = require("dotenv");

dotenv.config();


// const accountSid = 'your_account_sid';  // Get from Twilio Dashboard
// const authToken = 'your_auth_token';    // Get from Twilio Dashboard
const client = new twilio(process.env.accountSid, process.env.authToken);

const sendOTP = async (phone, otp) => {
  try {
    await client.messages.create({
      body: `Your Right Time Property verrification code is: ${otp}`,
      to: phone,    // User's phone number
      from: process.env.twilioNumber // Your Twilio number
    });
    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP');
  }
};

module.exports = { sendOTP };
