//first-MongoModel.js
var mongoose = require('mongoose');
mongoose.connect('localhost', 'first-MongoModel');

var db = mongoose.connection;
db.once('open', function callback() {

	var schema = new mongoose.Schema({ name: 'string', size: 'string' });
	var Tank = mongoose.model('Tank', schema);

	var small = new Tank({ size: 'small' });
	small.save(function (err){
		if (err) return handleError(err);
		else { console.log("Saved!");}
	});
	
});

/*
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);

var small = new Tank({ size: 'small' });
small.save(function (err){
	if (err) return handleError(err);
	else { console.log("Saved!");}
});

Tank.create({ size: 'small' }, function (err, small) {
	if (err) return handleError(err);
	else {  console.log("Save!"); }
});

//Tank.find({  size: 'small'}).exec(callback);

Tank.remove({ size: 'small' }, function(err){
	if (err) return handleError(err);
	else { console.log("removed!"); }
})
*/