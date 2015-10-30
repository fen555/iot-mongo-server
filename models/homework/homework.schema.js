;(function () {
  'use strict'
  var modelName = 'homework'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  

  var schema = new Schema({
    timestamp: { type: Date, default: Date.now },
    iot_id : {
      type : String,
      required : true
    },
    temperature : {
      type : String,
      required : true
    },
    relative_humidity : {
      type : String,
      required : true
    }
  })

  module.exports = mongoose.model(modelName, schema)
})()
