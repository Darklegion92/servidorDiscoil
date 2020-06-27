const CONFIG = require('./config.js')

let mongoose = require('mongoose')

mongoose.connect(CONFIG.DB_MONGO,{useNewUrlParser: true, useCreateIndex: true})

module.exports = mongoose;