const { SendMailClient } = require("zeptomail");

const url = "api.zeptomail.in/";
const token = "Zoho-enczapikey PHtE6r0JEe7oi255oxYIt6W6QpGtN9wv/rthKABHtodDC/5QHk1cqd4owDKz/k8oVvZFFvKTz4M8tbqdtLqHcz2+YGdKW2qyqK3sx/VYSPOZsbq6x00VuF0ZcEXdXI7tdNZo0ifVvtnfNA==";

// services/email.service.js
const https = require('https');
const { apiKey, senderAddress } = require('../config/zeptomail.config');

function sendTransactionalEmail(recipient, subject, content) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify({
      bounce_address: 'bounces@yourdomain.com', // Replace with your bounce address
      from: {
        address: senderAddress,
        name: 'Your Real Estate Website',
      },
      to: Array.isArray(recipient) ? recipient.map(email => ({ email_address: { address: email } })) : [
        {
          email_address: {
            address: recipient,
          },
        },
      ],
      subject: subject,
      htmlbody: content, // Use `plaintextbody` for plain text emails if preferred
    });

    const options = {
      hostname: 'api.zeptomail.com',
      port: 443,
      path: '/v1.1/email',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Zoho-enczapikey ${apiKey}`,
        'Content-Length': data.length,
      },
    };

    const req = https.request(options, (res) => {
      let responseBody = '';

      res.on('data', (chunk) => {
        responseBody += chunk;
      });

      res.on('end', () => {
        if (res.statusCode >= 200 && res.statusCode < 300) {
          resolve(JSON.parse(responseBody));
        } else {
          reject(new Error(`Failed to send email: ${responseBody}`));
        }
      });
    });

    req.on('error', (error) => {
      reject(error);
    });

    req.write(data);
    req.end();
  });
}

module.exports = {
  sendTransactionalEmail,
};
