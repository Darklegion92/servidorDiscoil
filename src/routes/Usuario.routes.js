const { Router } = require("express");
const UsuarioCtrl = require("../controllers/Usuario.controller");

router = Router();
router
  .post("/login", UsuarioCtrl.login)
  .post("/", UsuarioCtrl.crear)
  .put("/", UsuarioCtrl.editar)
  .get("/", UsuarioCtrl.consultar)
  .get("/:id", UsuarioCtrl.consultarId)
  .get("/*", UsuarioCtrl.error);

module.exports = router;
