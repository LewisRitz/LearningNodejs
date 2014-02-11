//inputDataFromConsole.js
var mongoose = require('mongoose');
var readline = require('readline');

var rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

mongoose.connect('localhost', 'first-MongoModel');

var db = mongoose.connection;
db.once('open', function callback() {

	var schema = new mongoose.Schema({ name: 'string', size: 'string' });
	schema.methods.getInfoFrom = function(){
		var returnString = this.name
			? "Tank Name: "+this.name+"  Tank Size: "+this.size
			: "This tank doesn't have a name or size."
		console.log(returnString);
	}
	var Tank = mongoose.model('Tank', schema);

	rl.question("What do you want to name your Tank? ", function(answer){
		rl.question("What size tank do you want?", function(answer2){
			var small = new Tank({ size: answer2, name: answer });
			rl.close();
			small.save(function (err){
				if (err) { return handleError(err); }
				else { small.getInfoFrom; console.log("Saved!"); }
			});
			small.getInfoFrom();
		});
	});	
});
