const { Schema, model } = require("mongoose");

const PedidosSchema = new Schema({
  items: {
    type: Array,
    required: true,
  },
  total: {
    type: Number,
    required: true,
  },
  usuario: {
    type: Object,
    required: true,
  },
  estado:{
    type:String,
    required:true,
    default:"ACTIVO",
    uppercase:true
  },
  createAt: {
    type: Date,
    default: Date.now(),
  },
});
const Pedido = model("Pedidos", PedidosSchema);

module.exports = Pedido;
