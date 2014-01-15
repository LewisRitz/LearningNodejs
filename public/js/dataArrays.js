<?php
error_reporting (E_ALL ^ E_NOTICE);
session_start();
?>		
<?php 
	
	$SpecialsPics = array();

	require("dbStuff/connect.php");



		var NewsPics = new Array(
	  		"DorneyVilleBeverage/images/beers/Blue_Moon_Pumpkin.jpg", 
	  		"DorneyVilleBeverage/images/News/Zen-Blank-Cigarette-Tubes-Blueberry-Flavor.jpg", 
	  		"DorneyVilleBeverage/images/beers/SamAdamsLogo.jpg", 
	  		"DorneyVilleBeverage/images/News/twisted-twin-salsa.jpg"
	  		);
	  	var SpecialsPics = new Array();
	  	var ListPics = new Array();
	  	var NewPics = new Array();
	  	var InfoPics = new Array();
	  	var ContactPics = new Array();
	  	var FactsPics = new Array();
	  	var LinksPics = new Array();

	  	var NewsCaps = new Array("Come In For a Free Sample While Supplies Last / Blue Moon Pumpkin (On Draft)", 
	  		"We now have cigarette Tubes and Tabacco Bags", 
	  		"Free Glass w/purchase of Sam Adams Case (while supplies last)", 
	  		"Twisted Twins Salsa Locally - Northhampton - Best Salsa!"
	  		);
	  	var SpecialsCaps = new Array();
	  	var ListCaps = new Array();
	  	var NewCaps = new Array();
	  	var InfoCaps = new Array();
	  	var ContactCaps = new Array();
	  	var FactsCaps = new Array();
	  	var LinksCaps = new Array();
?>