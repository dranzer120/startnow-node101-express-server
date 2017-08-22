// import files and packages up here
var express = require('express')
var morgan = require('morgan')
var path = require('path');
//var data = require('./data.json')

// create your express server below
var app = express()

// add your routes and middleware below
app.use(morgan('combined'))
app.use('/',express.static(path.join(__dirname,'../temp')));

// finally export the express application
app.get('/data', function(request, response){
  
  response.json(require('./data.json'))
  //response.sendFile(path.normalize(__dirname + '/data.json'))
})

// express.static

module.exports = app;
