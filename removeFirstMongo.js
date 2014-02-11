//removeFirstMongo.js
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
	var Tank = mongoose.model('Tank', schema);

	function Repeater() {
		Tank.find(function (err, tanks){
			if (err) { console.log(err); }//TODO handle err
			console.log("TANK NUM ---- TANK ID -------------------------- TANK SIZE ----------- TANK NAME -");
			for (var i=0; i<tanks.length; i++){
				console.log(i+"\t"+tanks[i].id + "\t\t"+tanks[i].size+"\t\t"+tanks[i].name);
			}
			rl.question("Would you like to delete another? Y/N: ", function(answer2){

				if (answer2 === 'Y') {
					rl.question("What tank do you want to delete? Name: ", function(answer){
						Tank.remove({ name: answer}, function (err, tanks){
							if (err) { console.log(err); }//TODO handle err
							console.log("ANSWER: "+answer);
							console.log("====Updated Array====");
							rl.close();
							Repeater();
						});
					});
				}
				else if (answer2 === 'N') { rl.close(); console.log("DONE."); return; }
				//rl.close();
				console.log("Please enter either Y or N."); Repeater(Tank);
			});
		});
	}
	Repeater();
});