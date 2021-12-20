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
},{
    timestamps:true,
    versionKey:false,
})


const User = model('User', userSchema)

module.exports = User
