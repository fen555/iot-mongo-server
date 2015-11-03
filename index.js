var mongoose = require('mongoose')
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
var Model = require('./models/homework/homework.schema.js')
var Mem = require('./models/member/member.schema.js')

 

mongoose.connect('mongodb://localhost/iot')

app.use(express.static('public'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

var homework = require('./models/homework/homework.route.js')
var member = require('./models/member/member.route.js')


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

app.use('/', member)

 
// app.delete('/api/iot/:id', function (req, res){
//       return iot.findById(req.params.id, function (err, iot) {
//         return iot.remove(function (err) {
//           if (!err) {
//             console.log("removed")
//             return res.send('')
//           } else {
//             console.log(err)
//           }
//         })
//       })
//     })



var server = app.listen(3000, function () {
  var host = server.address().address
  var port = server.address().port

  console.log('App listening at http://%s:%s', host, port)
})
