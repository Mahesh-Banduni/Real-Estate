const Redis = require("redis");

const redisClient = Redis.createClient({
    host: process.env.REDIS_HOST || 'localhost',
    port: process.env.REDIS_PORT || 6379,
    password: process.env.REDIS_PASSWORD,
    retry_strategy: (options) => {
        const { attempt } = options;
        const delay = Math.min(attempt * 100, 3000);
        return delay;
    }
});

// Redis event listeners
redisClient.on('connect', () => {
    console.log('Redis Connected');
});

redisClient.on('error', (err) => {
    console.error('Redis Client Error:', err);
});

redisClient.on('ready', () => {
    console.log('Redis is ready');
});

redisClient.on('end', () => {
    console.log('Redis connection closed');
});

// Handle application termination
process.on('SIGINT', () => {
    redisClient.quit(() => {
        console.log('Redis connection closed through app termination');
        process.exit(0);
    });
});

module.exports = {
    redisClient,
    connectRedis: () => redisClient
};
