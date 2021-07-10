const mongoose = require('mongoose');

const SabritaSchema = new mongoose.Schema({
    codigo:{
        type: Number,
        required:true,
        unique: true
    },
    nombre:{
        type: String,
        required:true
    },
    gramos:{
        type: Number,
        default:5
    },
    precio:{
        type: Number
    },
    fecha_reg:{
        type: Date,
        default: Date.now
    }
})

const Sabritas = mongoose.model('Sabritas', SabritaSchema);

module.exports = Sabritas;