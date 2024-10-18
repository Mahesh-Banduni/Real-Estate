const twilio = require('twilio');

const accountSid = 'your_account_sid';  // Get from Twilio Dashboard
const authToken = 'your_auth_token';    // Get from Twilio Dashboard
const client = new twilio(accountSid, authToken);

const sendOTP = async (phone, otp) => {
  try {
    await client.messages.create({
      body: `Your OTP code is ${otp}`,
      to: phone,    // User's phone number
      from: 'your_twilio_phone_number' // Your Twilio number
    });
    return { success: true, message: 'OTP sent successfully' };
  } catch (error) {
    console.error('Error sending OTP:', error);
    throw new Error('Failed to send OTP');
  }
};

module.exports = { sendOTP };
