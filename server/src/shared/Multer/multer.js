import multer from "multer";
import { dirname, } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(
      null,
      `${__dirname}/assets/img/posts`
    );
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});
export const uploader = multer({
  storage,
});
