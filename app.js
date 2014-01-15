var http = require('http');

var server = http.createServer(function(request, response ) {
	response.writeHead(200, {
		'Content-type': 'text/plain'
	});
	response.end('Hello World');
});

server.listen(process.env.PORT || 4000);

console.log('listening on http://127.0.0.1:4000');
