const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } = process.env;
const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
  lazyLoading: true,
});

const sendOTP = async (phone) => {
  try {
    const result = await client.verify.v2.services(TWILIO_SERVICE_SID)
      .verifications.create({
        to: `+${phone}`,
        channel: "sms",
      });
    return {
      success: true,
      message: "OTP sent successfully",
      //payload: result,
    };
  } catch (err) {
    return {
      success: false,
      message: `Error in sending otp: ${err.message}`,
    };
  }
};

const verifyOTP = async (phone, otp) => {
  try {
    const result = await client.verify.v2.services(TWILIO_SERVICE_SID)
      .verificationChecks.create({
        to: `+${phone}`,
        code: otp,
      });
    return {
      success: true,
      message: "OTP verified successfully",
      //payload: result,
    };
  } catch (err) {
    return {
      success: false,
      message: `Error in verifying otp: ${err.message}`,
    };
  }
};

module.exports = { sendOTP, verifyOTP };