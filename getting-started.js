// getting-started.js
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback(){
		//yay!
		//console.log("IT WORKED!");

		
		var kittySchema = mongoose.Schema({
			name: String
		});
		/*
		kittySchema.methods.speak = function() {
			var greeting = this.name
				? "Meow name is " + this.name
				: "I don't have a name"
			console.log(greeting);
		}

		var Kitten = mongoose.model('Kitten', kittySchema);
		/**
		var silence = new Kitten({ name: 'Silence'});
		//console.log(silence.name);
		var fluffy = new Kitten({ name: 'fluffy' });
		//fluffy.speak();
		//silence.speak();
		fluffy.save(function (err, fluffy){
			if (err) { console.log("Save Error: "+err); }
			fluffy.speak();
		});
		silence.save(function (err, silence){
			if (err) { console.log("Save Error: "+err); }
			silence.speak();
		});

		*/
		var Kitten = mongoose.model('Kitten', kittySchema);
		Kitten.find(function (err, kittens){
			if (err) { console.log(err); }//TODO handle err
			console.log(kittens);
		});
		
		//Kitten.find({ name: /^Fluff/ }, callback);
});