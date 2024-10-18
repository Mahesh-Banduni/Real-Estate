const redis = require('redis');

// Create a Redis client
const client = redis.createClient({
  host: '127.0.0.1', 
  port: 6379
});

client.connect();

const setOTP = async (key, otp, expirationTime = 300) => {
  await client.setEx(key, expirationTime, otp);
};

const getOTP = async (key) => {
  return await client.get(key);
};

const deleteOTP = async (key) => {
  await client.del(key);
};

module.exports = { setOTP, getOTP, deleteOTP };
