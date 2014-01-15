var express = require('express'),
	app = express();

app.use(express.static(__dirname + '/public'));

app.listen(process.env.PORT || 5000);

console.log("App listening on port 5000");