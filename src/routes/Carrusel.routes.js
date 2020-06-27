const {Router} = require('express')
const CarruselCtrl = require('../controllers/Carrusel.controller')
const {uploadCarrusel} = require("../config/uploader")

router = Router();
router
    .get('/',CarruselCtrl.consultar)
    .post('/:tipo',uploadCarrusel.single('file'),CarruselCtrl.guardarimg)
    .delete('/',CarruselCtrl.eliminarimg)
    .get('/*',CarruselCtrl.error)
    
module.exports = router;