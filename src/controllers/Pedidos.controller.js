const Pedidos = require("../models/Pedidos");
/**
 * consultar cliente por documento
 */
async function guardar(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { items, usuario, total } = req.body;

  try {
    const pedido = new Pedidos({ items, usuario, total });

    const resp = await pedido.save();

    if (resp._id) {
      res.status(200).send({
        mensaje: "Pedido Guardado Correctamente",
        status: 200,
        id: resp._id,
      });
    } else {
      res.status(201).send({ mensaje: "No Se Guardo Pedido", status: 201 });
    }
  } catch (error) {
    console.log(error);
    res.status(501).send({ mensaje: error, status: 501 });
  }
}

async function consultar(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { id } = req.params;

  try {
    //se consulta el Articulo

    const pedido = await Pedidos.findById(id);

    if (pedido) {
      res.status(200).send(pedido);
    } else {
      res.status(201).send({ mensaje: "No Se Guardo Pedido", status: 201 });
    }
  } catch (error) {
    res.status(501).send({ mensaje: error, status: 501 });
  }
}

async function consultarFiltros(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { fechainicial, fechafinal } = req.query;

  try {
    const pedidos = await Pedidos.find({
      createAt: { $lte: new Date(fechafinal) },
    });

    if (pedidos) {
      res.status(200).send(pedidos);
    } else {
      res.status(201).send({ mensaje: "No Se Guardo Pedido", status: 201 });
    }
  } catch (error) {
    res.status(501).send({ mensaje: error, status: 501 });
  }
}

async function consultarTotal(req, res) {
  res.setHeader("Content-Type", "application/json");
  try {
    const pedidos = await Pedidos.find();

    if (pedidos) {
      res.status(200).send(pedidos);
    } else {
      res.status(201).send({ mensaje: "No Se Guardo Pedido", status: 201 });
    }
  } catch (error) {
    res.status(501).send({ mensaje: error, status: 501 });
  }
}

async function cambiarEstado(req, res) {
  res.setHeader("Content-Type", "application/json");

  const { tipo, id } = req.params;

  try {
    //se consulta el Articulo
    const pedido = await Pedidos.updateOne({ _id: id }, { estado: tipo });

    if (pedido.nModified > 0) {
      res
        .status(200)
        .send({ mensaje: "Se Actualizo Correctamente", status: 200 });
    } else {
      res.status(201).send({ mensaje: "No Se Encontro Pedido", status: 201 });
    }
  } catch (error) {
    res.status(501).send({ mensaje: error, status: 501 });
  }
}

function error(req, res) {
  res.status(404).send({ error: "Página no encontrada" });
}

module.exports = {
  guardar,
  cambiarEstado,
  consultarFiltros,
  consultar,
  consultarTotal,
  error,
};
