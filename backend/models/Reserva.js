const { Schema, model } = require('mongoose')

const reservaSchema = new Schema({
  servicio: String,
  date: Date,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  }
})

noteSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Note = model('Reserva', reservaSchema)

module.exports = Note
