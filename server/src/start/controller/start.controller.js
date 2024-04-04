import { Router } from "express";
import { config } from "dotenv";
config();
const PORT = process.env.PORT || 3000;

export const getStart = Router();
getStart.get("/", (req, res) => {
  res.status(200).json({
    uptime: `${process.uptime()}`,
    data: {
      error: `💀 Ruta no valida ☠️.`,
    },
    timestamp: `${Date.now()}`,
  });
});
