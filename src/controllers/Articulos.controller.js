const conexionFirebird = require("../services/conectionFirebird");

/**
 * consultar cliente por documento
 */
async function nombre(req, res) {
  res.setHeader("Content-Type", "application/json");
  const nombre = req.query.nombre;

  try {
    //se consulta el Articulo
    const datos = await conexionFirebird.queryDB(
      "select a.matid as id, a.descrip as nombre, i.existenc as inventario, i.precio1 as precio FROM material a," +
        "MATERIALSUC i WHERE a.matid = i.matid and a.descrip LIKE ? and i.existenc >0 and i.precio1>0",
      ["%" + nombre.toUpperCase() + "%"]
    );
    if (datos[0]) {
      let articulos = [];
      datos.map((dato) => {
        const articulo = {
          id: dato.ID.toString(),
          nombre: dato.NOMBRE.toString(),
          cantidad: dato.INVENTARIO,
          precio: dato.PRECIO,
        };
        articulos.push(articulo);
      });
      res.status(200).send(articulos);
    } else {
      res.status(201).send({ res: "Articulo no Existe" });
    }
  } catch (error) {
    console.log(error);

    res.status(200).send({ res: error });
  }
}

function error(req, res) {
  res.status(404).send({ error: "Página no encontrada" });
}

module.exports = {
  nombre,
  error,
};
