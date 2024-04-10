import { connect } from "mongoose";
import "dotenv/config";

const MONGO_URL = "mongodb+srv://c17node29:ay8B81LfdUkmv13I@cluster0.mqbzmmi.mongodb.net/c17node29"

export const connectDB = async () => {
  try {
    await connect(MONGO_URL);
    console.log(`✅ Database Connected with 🚀 mongo.`);
  } catch (error) {
    console.error(`☠️  Database Connection Error: ${error}`);
  }
};

