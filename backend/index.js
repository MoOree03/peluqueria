const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes/routes')
const cookieParser = require('cookie-parser')

//DataBase conection
mongoose.connect('mongodb://localhost/node_auth', () => {
    console.log("DB is connected")
})

app = express()

app.use(cookieParser())

app.use(cors({
    credentials: true,
    origin: ['http://localhost:3000']
}))

app.use(express.json())


app.use('/api', routes)

app.listen(4000, () => {
    console.log("Server is listen in port 4000")
})