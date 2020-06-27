const service = require("../services/index.service");
const CONFIG = require("../config/config");
const Firebird = require("node-firebird");
const Carrusel = require("../models/Carruseles");
const mongoose = require("../config/conexion");

async function consultar(req, res) {
  res.setHeader("Content-Type", "application/json");

  const carrusel = await Carrusel.find();
  try {
    if (carrusel.length > 0) res.status(200).send(carrusel);
    else res.status(201).send({ res: "no se encontraron datos" });
  } catch (e) {
    console.log(e);
  }
}
async function guardarimg(req, res) {
  res.setHeader("Content-Type", "application/json");
  const nombre = req.url.replace("/", "");
  const carrusel = await Carrusel.findOne({ nombre });
  const imagenes = carrusel.imagenes;

  imagenes.push("img/carrusel/" + req.file.filename);

  const result = await Carrusel.updateOne({ nombre }, { imagenes });
  console.log(result);

  if (result.nModified > 0)
    res.status(200).send({ res: "agregado correctamente" });
  else res.status(201).send({ res: "no se modifico nada" });
}
async function eliminarimg(req, res) {
  res.setHeader("Content-Type", "application/json");
  const { nombre, imagenes } = req.body;
  const result = await Carrusel.updateOne({ nombre }, { imagenes });

  if (result.nModified > 0)
    res.status(200).send({ res: "eliminado correctamente" });
  else res.status(201).send({ res: "no se modifico nada" });
}

function error(req, res) {
  res.status(404).send({ error: "Página no encontrada" });
}

module.exports = {
  consultar,
  guardarimg,
  eliminarimg,
  error,
};
