const express = require('express')
const bodyParser = require("body-parser")
const cors = require("cors")
const methodOverride = require("method-override")
const mongoose = require('mongoose')
const http = require("http")

const database = 'mongodb://localhost:27017/Database'
const app = express()

mongoose.Promise = require('bluebird')
mongoose.createConnection(database , {useNewUrlParser: true})

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride())

app.use('/api/product', require('./api/product'))

http.createServer(app).listen(8080, () => {
    console.log("Server start 8080")
})

