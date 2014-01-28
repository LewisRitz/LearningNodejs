var express = require('express'),
	http = require('http'),
	app = express();


app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 4000);

console.log("http: "+http.toString());
console.log("App listening on port 4000");