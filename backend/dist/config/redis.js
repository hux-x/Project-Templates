"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const redisClient = (0, redis_1.createClient)({
    url: `redis://${process.env.REDIS_HOST || 'localhost'}:${process.env.REDIS_PORT || 6379}`,
});
redisClient.on('error', (err) => {
    console.error('Redis Connection Error:', err);
});
redisClient.on('connect', () => {
    console.log('Connected to Redis');
});
async function connectRedis() {
    if (!redisClient.isOpen) {
        await redisClient.connect();
    }
}
connectRedis();
exports.default = redisClient;
//# sourceMappingURL=redis.js.map