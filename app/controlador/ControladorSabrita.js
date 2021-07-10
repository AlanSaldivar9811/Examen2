//const ModeloDulces = require('../modelo/ModeloDulces');
const modeloSabrita = require('../modelo/ModeloSabrita')

function index(req,res) {
    console.log('ok');
    modeloSabrita.find({})
    .then(sabritas => {
        if(sabritas.length) return res.status(200).send({sabritas});
        return res.status(204).send({message:'No hay contenido'});
    }).catch(error => res.status(500).send({error}));
}

function agregar(req,res) {
    console.log(req.body);
    new modeloSabrita(req.body).save()
    .then(sabritas => {
        res.status(200).send({sabritas})
    }).catch(error => res.status(500).send({error}));
}

function buscar(req,res,next) {
    let consulta ={};
    consulta[req.params.key]=req.params.value;
    modeloSabrita.find(consulta).then(sabritas =>{
        if(!sabritas.length) return next();
        req.body.sabritas= sabritas;
        return next();
        
    }).catch(error => {
        req.body.error=error;
        next();
    })
}

function mostrar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.sabritas) return res.status(404).send({message: 'No hay datos que mostrar'});
    let SabritasObj = req.body.sabritas;
    return res.status(200).send({SabritasObj});
    
}

function actualizar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.sabritas) return res.status(404).send({message: 'No hay datos para actualizar'});
    let SabritasObj = req.body.sabritas[0];
    SabritasObj=Object.assign(SabritasObj,req.body);
    SabritasObj.save().then(SabritasAlta => {
        res.status(200).send({message: 'Los datos se actalizaron correctamente',SabritasAlta});
    }).catch(error => res.status(500).send({error}));
}

function eliminar(req,res) {
    if(req.body.error) return res.status(500).send({error});
    if(!req.body.sabritas) return res.status(404).send({message: 'No hay datos para eliminar'});
    req.body.sabritas[0].remove().then(SabritasEliminar =>{
        res.status(200).send({message: 'La informacion se elimino correctamente', SabritasEliminar})
    }).catch(error => res.status(500).send({error}));
}

module.exports={
    index,
    agregar,
    buscar,
    mostrar,
    actualizar,
    eliminar
}