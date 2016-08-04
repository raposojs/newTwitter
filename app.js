var express = require('express')
var app = express()
var morgan = require('morgan')
var swig = require('swig')
var port = 1620
app.use(morgan('dev'))

app.get('/', function(req, res){
	var body = "server listening"
	res.end(body)
})

app.get('/news', function(req, res){
	var body = "New York Times"
	res.end(body)
})

app.listen(port, function(){
	console.log('listening to ' + port)
})