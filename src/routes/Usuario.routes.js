const { Router } = require("express");
const UsuarioCtrl = require("../controllers/Usuario.controller");
const Auth = require("../middlewares/acceso")

router = Router();
router
  .post("/login", UsuarioCtrl.login)
  .post("/",Auth.isAuth, UsuarioCtrl.crear)
  .put("/",Auth.isAuth, UsuarioCtrl.editar)
  .get("/",Auth.isAuth, UsuarioCtrl.consultar)
  .get("/:id",Auth.isAuth, UsuarioCtrl.consultarId)
  .get("/*", UsuarioCtrl.error);

module.exports = router;
