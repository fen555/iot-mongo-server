var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')

mongoose.connect('mongodb://localhost:27017/homework_db')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var homework = require('./models/homework/homework.route.js')
app.use('/api/homework', homework)


var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
