const { Schema, model } = require("mongoose");

const TextosSchema = new Schema({
  nombre: {
    type: String,
    required: true,
    lowercase: true,
  },
  texto: {
    type: String,
  },
  titulo: {
    type: String,
  },
});
const Texto = model("Textos", TextosSchema);

module.exports = Texto;
