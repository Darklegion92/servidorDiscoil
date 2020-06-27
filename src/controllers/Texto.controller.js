const service = require("../services/index.service");
const CONFIG = require("../config/config");
const Texto = require("../models/Textos");
const mongoose = require('../config/conexion');

async function consultar(req, res) {
  res.setHeader("Content-Type", "application/json");

  const texto = await Texto.find();
  try{
  if (texto.length > 0) res.status(200).send(texto);
  else res.status(201).send({res:"no se encontraron datos"})
  }catch(e){
    console.log(e);
  }
}

async function actualizar(req, res) {
  res.setHeader("Content-Type", "application/json");
  const {nombre,titulo,texto} = req.body

  
  const result = await Texto.updateOne({ nombre }, { titulo,texto });
  console.log(result);

  if (result.nModified > 0)
    res.status(200).send({ res: "actualizado correctamente" });
  else res.status(201).send({ res: "no se modifico nada" });
}
function error(req, res) {
  res.status(404).send({ error: "Página no encontrada" });
}

module.exports = {
  consultar,
  actualizar,
  error,
};
