const Usuario = require("../models/Usuarios");
const Pedidos = require("../models/Pedidos");
const service = require("../services/index.service");
const CONFIG = require("../config/config");

async function login(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { username, password } = req.body;

  const usuario = await Usuario.findOne({ username });

  if (usuario) {
    const facturas = await Pedidos.find();
    usuario.facturas = facturas;

    return res.status(200).send({
      token: service.crearToken(username, password),
      usuario,
      status: 200,
    });
  } else
    return res
      .status(201)
      .send({ mensaje: "usuario o Contraseña Incorrectas", status: 201 });
}
async function consultar(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { id } = req.params;

  const usuario = await Usuario.findById(id);

  if (usuario) {
    const facturas = await Pedidos.find();
    usuario.facturas = facturas;

    return res.status(200).send(usuario);
  } else
    return res
      .status(201)
      .send({ mensaje: "usuario o Contraseña Incorrectas", status: 201 });
}
function error(req, res) {
  res.status(404).send({ mensaje: "Página no encontrada" });
}

module.exports = {
  login,
  consultar,
  error,
};
