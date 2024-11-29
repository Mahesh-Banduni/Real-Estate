const { TWILIO_AUTH_TOKEN, TWILIO_ACCOUNT_SID, TWILIO_SERVICE_SID } = process.env;
const axios = require('axios');
// const client = require("twilio")(TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, {
//   lazyLoading: true,
// });

const sendOtp = async (phone) => {
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

// OTP sending function
const sendOTP = async (contactNumber, otp) => {
  const apiUrl = 'http://bulksms.textmysms.com/app/smsapi/index.php';
  const params = new URLSearchParams();

  params.append('key', '56694D0C2692A5');
  params.append('campaign', '0');
  params.append('routeid', '13');
  params.append('type', 'text');
  params.append('contacts', contactNumber);
  params.append('senderid', 'CERTEC');
  params.append('msg', `Dear User, Your OTP for the YooZit portal is ${otp} Valid for 30 minutes.\nRegards\nTeam YooZit`);
  params.append('template_id', '1207172838360608015');

  try {
    const response = await axios.post(apiUrl, params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
    console.log('OTP sent successfully:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error sending OTP:', error.response ? error.response.data : error.message);
    throw new Error('Failed to send OTP');
  }
}

//module.exports = { sendOtp };

module.exports = { sendOTP, verifyOTP };