//const { redisClient } = require('../connection/redisConnection.js');

//const connectRedis= require("../connection/redisConnection.js");

// //const redisClient = connectRedis();
// const Redis = require("redis");

// const setOTP = async (key, otp, expirationTime = 300) => {
//   await Redis.setEx(key, expirationTime, otp);
// };

// const getOTP = async (key) => {
//   return await Redis.get(key);
// };

// const deleteOTP = async (key) => {
//   await Redis.del(key);
// };

// module.exports = { setOTP, getOTP, deleteOTP };

const { redisClient } = require('../utils/redis.connection.config.js'); // Update the path

const setOTP = async (key, otp, expirationTime = 300) => {
    if (!redisClient.isOpen) await redisClient.connect(); // Ensure client is connected
    await redisClient.setEx(key, expirationTime, otp);
};

const getOTP = async (key) => {
    if (!redisClient.isOpen) await redisClient.connect(); // Ensure client is connected
    return await redisClient.get(key);
};

const deleteOTP = async (key) => {
    if (!redisClient.isOpen) await redisClient.connect(); // Ensure client is connected
    await redisClient.del(key);
};

module.exports = { setOTP, getOTP, deleteOTP };

