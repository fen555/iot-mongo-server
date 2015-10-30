;(function () {
  'use strict'
  var modelName = 'phonebook'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    name: {
      type: String,
      required: true
    },
    tel: String,
    email: String,
    picture: String
  })

  module.exports = mongoose.model(modelName, schema)
})()
