const {Schema, model} = require('mongoose')

const CarruselesSchema = new Schema({
    nombre:{
        type:String,
        required:true,
        lowercase:true
    },
    imagenes:{
        type:Array
    }

})
const Carrusel = model('Carruseles',CarruselesSchema)

module.exports = Carrusel;