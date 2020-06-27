const Usuario = require('../models/Usuarios')
const service = require('../services/index.service')
const CONFIG = require('../config/config')


async function login(req,res){
  res.setHeader('Content-Type', 'application/json');

  const {username,password} = req.body

  const usuario = await Usuario.findOne({username})
  
    if(usuario)
      return res.status(200).send({token: service.crearToken(username,password),usuario,status:200})   
    else
       return res.status(201).send({mensaje: "usuario o Contraseña Incorrectas",status:201})
}
function error(req,res){
    res.status(404).send({mensaje: "Página no encontrada"});
}

module.exports = {
    login,
    error
}