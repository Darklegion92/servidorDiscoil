const { Router } = require("express");
const PedidosCtrl = require("../controllers/Pedidos.controller");

const router = Router();
router
  .post("/guardar", PedidosCtrl.guardar)
  .get("/", PedidosCtrl.consultarTotal)
  .get("/filtro", PedidosCtrl.consultarFiltros)
  .get("/:id", PedidosCtrl.consultar)
  .get("/:tipo/:id", PedidosCtrl.cambiarEstado)
  .get("/*", PedidosCtrl.error);

module.exports = router;
