;(function () {
  'use strict'
  var modelName = 'member'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  

  var schema = new Schema({
    timestamp: { type: Date, default: Date.now },
    name : {
      type : String,
      //required : true
    },
    surname : {
      type : String,
      //required : true
    },
    tel : {
      type : String,
      //required : true
    },
    email : {
      type : String,
      //required : true
    },
    username : {
      type : String,
      //required : true
    },
    passworde : {
      type : String,
      //required : true
    }
    
  })

  

  module.exports = mongoose.model(modelName, schema)
})()
