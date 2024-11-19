const crypto = require('crypto');

// Encryption function definition
function encrypt(text) {

  const cipher = crypto.createCipheriv(process.env.ALGORITHM, process.env.ENCRYPTION_KEY, process.env.ENCRYPTION_IV);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  return {
    encryptedData: encrypted
  };
}
// Decryption function definition
function decrypt(encryptedText) {

  const decipher = crypto.createDecipheriv(process.env.ALGORITHM, process.env.ENCRYPTION_KEY, process.env.ENCRYPTION_IV);

  let decrypted = decipher.update(encryptedText, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}

const encryptData = async (req, res) => {
  try {
    // Fetch users from user service
    const users = await userService.getAllUsers();

    // Convert JSON to a string and encrypt it
    const encryptedResponse = encrypt(JSON.stringify(users), secretKey);
    const decryptedData = decrypt(encryptedResponse.encryptedData, secretKey, iv);

    // Send the encrypted response, including the IV
    res.json({
      //iv: encryptedResponse.iv, // Include IV so the client can decrypt the data
      encryptedData: encryptedResponse.encryptedData,
      decryptedData: JSON.parse(decryptedData)
    });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while encrypting data' });
  }
};

module.exports= {encrypt, decrypt};