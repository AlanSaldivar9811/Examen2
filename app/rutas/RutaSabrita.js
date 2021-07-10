const { Router } = require('express');
const router = Router();
const ControladorSabrita = require('../controlador/ControladorSabrita');

router.get('/',ControladorSabrita.index )
       .post('/',ControladorSabrita.agregar)
       .get('/:key/:value',ControladorSabrita.buscar,ControladorSabrita.mostrar)
       .put('/:key/:value',ControladorSabrita.buscar,ControladorSabrita.actualizar)
       .delete('/:key/:value',ControladorSabrita.buscar,ControladorSabrita.eliminar);

module.exports=router;