const { Schema, model } = require("mongoose");
const bcrypt = require("bcryptjs");

const UsuariosSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    lowercase: true,
  },
  facturas: {
    type: Array,
  },
  username: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    unique: true,
  },
  telefono: {
    type: String,
    required: true,
    lowercase: true,
  },
  direccion: {
    type: String,
    required: true,
    lowercase: true,
  },
  documento: {
    type: String,
    required: true,
    lowercase: true,
  },
  estado: {
    type: String,
    required: true,
    default: "ACTIVO",
    uppercase: true,
  },
  roles: {
    type: Array,
    required: true,
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
const Usuario = model("Usuarios", UsuariosSchema);

module.exports = Usuario;
