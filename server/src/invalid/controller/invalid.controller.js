import { Router } from "express";
import { config } from "dotenv";
config();
const PORT = process.env.PORT || 3000;

export const getInvalid= Router();
getInvalid.get("/", (req, res) => {
  res.status(200).json({
    uptime: `${process.uptime()}`,
    data: {
      msg: `💀 Invalid route ☠️.`,
    },
    timestamp: `${Date.now()}`,
  });
});
