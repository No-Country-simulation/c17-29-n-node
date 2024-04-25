import { connect } from "mongoose";
import { config } from "dotenv";

config();

const MONGO_URL = process.env.URL_MONGO;
const url =`${MONGO_URL}?authSource=admin&replicaSet=atlas-nxkciq-shard-0&ssl=true`;

export const connectDB = async () => {
  try {
    await connect(url);
    console.log(`✅ Database Connected with 🚀 mongo.`);
  } catch (error) {
    console.error(`☠️ Database Connection Error: ${error}`);
  }
};
