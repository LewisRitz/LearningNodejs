// web.js
var express = require("express");
var logfmt = require("logfmt");
var app = express();

app.use(logfmt.requestLogger());

app.get('/', function(req, res) {
	res.send('<h1 style=\"text-align:center\">Hello World!</h1>');
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
console.log("Listening on " + port);
});
