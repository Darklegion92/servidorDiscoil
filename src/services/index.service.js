const jwt = require('jwt-simple')
const moment = require('moment')
const config = require('../config/config')

function crearToken (usuario,password) {
 
    const payload = {
      usr: usuario,
      pass: password,
      iat: moment().unix(),
      exp: moment().add(1,'days').unix()
    }
    
    return jwt.encode(payload,config.SECRET_TOKEN)
  }

  module.exports = {
    crearToken
  }