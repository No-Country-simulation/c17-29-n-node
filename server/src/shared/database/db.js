import { connect } from "mongoose";
import { config } from "dotenv";

config();

const MONGO_URL = process.env.URL_MONGO;

export const connectDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log(`✅ Database Connected with 🚀 mongo.`);
  } catch (error) {
    console.error(`☠️  Database Connection Error: ${error}`);
  }
};
