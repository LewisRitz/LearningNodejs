//writingFilesToClient.js
fs = require('fs');
var filename= 'helloworld.txt',
	data = 'Hello World! From Lewis!!!';

fs.writeFile(filename, data, function (err){
	if (err) return console.log(err);
	console.log('Hello World > helloworld.txt');
});

//[contents of helloworld.txt]:
//Hello World!