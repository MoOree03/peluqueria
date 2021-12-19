const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique:true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    reservas:[{
        type:Schema.Types.ObjectId,
        ref: 'Reserva'
    }]
})

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id
      delete returnedObject._id
      delete returnedObject.__v
  
      delete returnedObject.passwordHash
    }
  })

const User = model('User', userSchema)

module.exports = User
