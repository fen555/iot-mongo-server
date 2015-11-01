var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var Model = require('./models/homework/homework.schema.js')

mongoose.connect('mongodb://localhost:27017/iot_db')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var homework = require('./models/homework/homework.route.js')
app.use('/api/iot', homework)


 app.post('/', function (req, res, next) {
    var obj = new Model(req.body)
    obj.save(function (err, obj) {
      if (err) {
        res.status(500).send(err)
      } else {
        res.send(obj)
      }
    })
  })



var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
