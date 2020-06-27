const { Router } = require("express");
const TextoCtrl = require("../controllers/Texto.controller");

router = Router();
router
    .get("/", TextoCtrl.consultar)
    .post("/", TextoCtrl.actualizar)
    .get("/*", TextoCtrl.error);

module.exports = router;
