const { Router } = require("express");
const ArticulosCtrl = require("../controllers/Articulos.controller");
const Auth = require("../middlewares/acceso")

const router = Router();
router
  .get("/consultar/:nombre", Auth.isAuth, ArticulosCtrl.nombre)
  .get("/*", ArticulosCtrl.error);
module.exports = router;
