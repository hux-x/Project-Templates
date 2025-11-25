import express from "express";
import connectToMongoDB from "@config/database";
import cors from "cors";
import dotenv from "dotenv";


dotenv.config();

const corsOptions = {
  origin: "http://localhost:5173",
  optionsSuccessStatus: 200,
};

const app = express();
app.use(cors(corsOptions));
connectToMongoDB();
app.use(express.json());

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});