
function say(word){
	console.log(word);
}

function scream(word, callback){
	setTimeout(function(){console.log(word+"!!!")}, 1000);
	//	console.log(word+"!!!");
	callback();
}

function execute(someFunctionA, value, anotherFunction, anotherValue, someFunction) {
	//someFunction(value, function(){
		someFunctionA(value);
		/*
		setTimeout(function(){
			anotherFunction(anotherValue, function(){
				someFunction(value);
			});
		}, 1000);
		*/
		/*
		setTimeout(function(){
			anotherFunction(anotherValue);
			someFunction(value);
		}, 1000);
		*/
		anotherFunction(anotherValue, function(){
			someFunction(value);
		});
	//});
	/*
	setTimeout(function(){ 
		anotherFunction(anotherValue);
	}, 1000);
	*/
	//someFunction(value);
	//anotherFunction(anotherValue);
}

execute(say, "Helloooo", scream, "Lewis", say);

/*
function execute(someFunction, value){
	someFunction(value);
}

execute(function(word){console.log(word)}, "Hello");
*/