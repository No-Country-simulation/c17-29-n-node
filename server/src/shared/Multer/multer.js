import multer from 'multer';
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const root = join(__dirname, "..");


export const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, join(root, '/assets/uploads'));
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

export const uploader = multer({
  storage: storage,
});
