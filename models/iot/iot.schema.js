;(function () {
  'use strict'
  var modelName = 'homework'
  var mongoose = require('mongoose')
  var Schema = mongoose.Schema

  var schema = new Schema({
    ip_addr: {
      type: String,
      required: true
    },
    port: Number,
    name: {
      type: String,
      required: true
    },
    date: { type: Date, default: Date.now }
  })

  module.exports = mongoose.model(modelName, schema)
})()
