import multer from "multer";
import { dirname, } from "path";
import { fileURLToPath } from "url";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(
      null,
      `${dirname(fileURLToPath(import.meta.url))}/assets/img/posts`
    );
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});
export const uploader = multer({
  storage,
});
