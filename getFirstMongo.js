//getFirstMongo.js
/**
var mongoose = require('mongoose');
mongoose.connect('localhost/test');

var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var tank = mongoose.model('Tank');

tank.findOne({ 'size': 'small'}, function (err, Tank) {
	if (err) return handleError(err);
	console.log(Tank);
});
*/


var mongoose = require('mongoose');
mongoose.connect('localhost', 'first-MongoModel');

var db = mongoose.connection;
db.once('open', function callback() {
	var schema = new mongoose.Schema({ name: 'string', size: 'string' });
	var Tank = mongoose.model('Tank', schema);
	Tank.find(function (err, tanks){
			if (err) { console.log(err); }//TODO handle err
			//console.log(tanks);
			console.log("---- TANK ID ------------- TANK NAME ------- TANK SIZE -");
			for (var i=0; i<tanks.length; i++){
				//console.log(i);
				//console.log(tanks.length);
				//tanks[i].getInfoFrom();
				//console.log("---- TANK ID ------------- TANK NAME - TANK SIZE -");
				console.log(tanks[i].id + "    "+tanks[i].name+"             "+tanks[i].size);
			}
		});
});