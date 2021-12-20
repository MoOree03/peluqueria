const { Schema, model } = require('mongoose')

const reservaSchema = new Schema({
    date: {
        type: String,
        required: true
    },
    hora: {
        type: String,
        required: true
    },
    servicio: {
        type: String,
        required: true
    },
    usuario: {
      type: String,
      required: true
  },
  estado: {
    type: String,
    required: true
},
    
},{
    timestamps:true,
    versionKey:false,
})


const Reserva = model('Reserva', reservaSchema)

module.exports = Reserva
