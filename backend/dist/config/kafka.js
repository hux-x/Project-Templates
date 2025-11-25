"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const kafkajs_1 = require("kafkajs");
const kafka = new kafkajs_1.Kafka({
    clientId: "hosted-app",
    brokers: ["localhost:9092"],
    // Only include these if needed
    ssl: false,
    sasl: {
        mechanism: "plain",
        username: "user",
        password: "pass",
    }
});
exports.default = kafka;
//# sourceMappingURL=kafka.js.map