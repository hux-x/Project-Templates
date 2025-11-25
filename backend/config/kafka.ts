import { Kafka } from "kafkajs";

const kafka = new Kafka({
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

export default kafka;


