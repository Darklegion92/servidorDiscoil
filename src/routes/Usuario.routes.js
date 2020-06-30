const { Router } = require("express");
const UsuarioCtrl = require("../controllers/Usuario.controller");

router = Router();
router
  .post("/login", UsuarioCtrl.login)
  .get("/consultar/:id", UsuarioCtrl.consultar)
  .get("/*", UsuarioCtrl.error);

module.exports = router;
