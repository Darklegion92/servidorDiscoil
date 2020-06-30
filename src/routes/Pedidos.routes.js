const { Router } = require("express");
const PedidosCtrl = require("../controllers/Pedidos.controller");

const router = Router();
router
  .post("/guardar", PedidosCtrl.guardar)
  .get("/:id", PedidosCtrl.consultar)
  .get("/:tipo/:id",PedidosCtrl.cambiarEstado)
  .get("/*", PedidosCtrl.error);
module.exports = router;
