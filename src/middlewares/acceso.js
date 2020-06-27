const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/config')

function isAuth(req,res,next){
    
    if(!req.headers.autorizacion){
        return res.status(403).send({res: "No Tiene Autorización"})
    }

    const token =req.headers.autorizacion.split(" ")[1]
    const payload = jwt.decode(token, config.SECRET_TOKEN)

    if(payload.exp<=moment().unix()){
        return res.status(401).send({res: "El token ha caducado"})
    }

    req.usuario = payload.sub
    next()
}

module.exports = {
    isAuth
}