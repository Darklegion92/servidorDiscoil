"use strict";
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const usuarioRouter = require("./routes/Usuario.routes");
const carruselRouter = require("./routes/Carrusel.routes");
const textoRouter = require("./routes/Texto.routes");
const articulosRouter = require("./routes/Articulos.routes");
const pedidosRouter = require("./routes/Pedidos.routes");
const path = require("path");
const session = require("express-session");
const CONFIG = require("./config/config");

const APP = express();

//MiddelWare
APP.use(cors());
APP.use(bodyParser.json());
APP.use(bodyParser.urlencoded({ extended: false }));
APP.use(
  session({
    secret: CONFIG.SECRET_TOKEN,
    resave: true,
    saveUninitialized: true,
  })
);
APP.use(morgan("dev"));

//Ruta
APP.use("/usuario", usuarioRouter);
APP.use("/articulos", articulosRouter);
APP.use("/pedidos", pedidosRouter);
APP.use("/carruseles", carruselRouter);
APP.use("/textos", textoRouter);
//Elementos Estaticos
APP.use(express.static(path.join(__dirname, "public")));
module.exports = APP;
