import multer from "multer";
import { dirNamePath } from "../dirNamePath/dirNamePath.js";

const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, `${dirNamePath}/assets/img/posts`);
  },
  filename: function (req, file, callback) {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});
export const uploader = multer({
  storage,
});
