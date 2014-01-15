var express = require('express');
var app = express();

app.get('/', function(req, res){
	res.send('<h1 style="text-align:center">Hello World!</h1>');
});

app.listen(5000, function(){
	console.log("Listening on Port 5000.."); 
});
