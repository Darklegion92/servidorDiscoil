const { Router } = require("express");
const PedidosCtrl = require("../controllers/Pedidos.controller");
const Auth = require("../middlewares/acceso")

const router = Router();
router
  .post("/guardar", Auth.isAuth,PedidosCtrl.guardar)
  .get("/", Auth.isAuth,PedidosCtrl.consultarTotal)
  .get("/filtro", Auth.isAuth,PedidosCtrl.consultarFiltros)
  .get("/:id", Auth.isAuth,PedidosCtrl.consultar)
  .get("/:tipo/:id",Auth.isAuth, PedidosCtrl.cambiarEstado)
  .get("/*",Auth.isAuth, PedidosCtrl.error);

module.exports = router;
