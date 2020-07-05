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
async function consultarId(req, res) {
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

async function consultar(req, res) {
  res.setHeader("Content-Type", "application/json");
  try {
    const usuario = await Usuario.find();

    if (usuario) {
      return res.status(200).send(usuario);
    } else
      return res
        .status(201)
        .send({ mensaje: "usuario o Contraseña Incorrectas", status: 201 });
  } catch (e) {
    res.status(500).send({ mensaje: "Error " + e, status: 500 });
  }
}

async function crear(req, res) {
  res.setHeader("Content-Type", "application/json");

  const usuario = new Usuario(req.body);

  const resp = await usuario.save();
  if (resp) {
    return res.status(200).send({ mesaje: "respuesta", status: 200 });
  } else
    return res
      .status(201)
      .send({ mensaje: "usuario o Contraseña Incorrectas", status: 201 });
}

async function editar(req, res) {
  res.setHeader("Content-Type", "application/json");

  const {
    _id,
    roles,
    username,
    password,
    nombre,
    apellido,
    documento,
    email,
    celular1,
    direccion,
    fecha,
  } = req.body;

  try {
    const resp = await Usuario.updateOne(
      { _id },
      {
        roles,
        username,
        nombre,
        apellido,
        documento,
        email,
        celular1,
        direccion,
        fecha,
      }
    );

    if (resp.nModified > 0) {
      return res.status(200).send({ mesaje: "respuesta", status: 200 });
    } else
      return res
        .status(201)
        .send({ mensaje: "no se encontro al usuario", status: 201 });
  } catch (e) {
    return res.status(500).send({ mensaje: "Error de servidor ", status: 500 });
  }
}

function error(req, res) {
  res.status(404).send({ mensaje: "Página no encontrada" });
}

module.exports = {
  login,
  consultarId,
  consultar,
  editar,
  crear,
  error,
};
