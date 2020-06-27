const multer = require("multer");
let storageCarrusel = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "src/public/img/carrusel");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});
const uploadCarrusel = multer({ storage:storageCarrusel });
module.exports = { uploadCarrusel };
