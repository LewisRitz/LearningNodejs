var numImages = new Array(1,4,5,3,2,1);
		var numTabs = 6;
		var currentImage = 0;
		var currentTab = 0;

		function nextInArray() { }

		function center(Picture){
			//console.log("picture width: "+ Picture.clientWidth);
			Picture.style.marginLeft = ((document.getElementById("picureFrame").clientWidth - Picture.clientWidth)/2) + "px";
		}

		function pictureLeft() { 
			//console.log("left");
			/*
			var OldPicId = "tag"+currentTab+"img"+currentImage;
			var OldPic = document.getElementById(OldPicId);
			if (OldPic) {
				OldPic.style.display = "none";
			}
			else { console.log("one not found."); }
			*/
			getRidOfOldPicture();
			getRidOfOldCaption();
			currentImage--;
			if (currentImage<0) { currentImage = numImages[currentTab]-1; }
			displayNewCaption();
			displayNewPicture();
			/*
			var NewPicId = "tag"+currentTab+"img"+currentImage;
			var NewPic = document.getElementById(NewPicId);
			if (NewPic) { NewPic.style.display = "block"; center(NewPic); }
			else { console.log("new pic id: "+NewPicId+" not found"); }
			*/
		}



		function pictureRight() { 
			getRidOfOldPicture();
			getRidOfOldCaption();
			currentImage++;
			if (currentImage>numImages[currentTab]-1) { currentImage = 0; }
			displayNewPicture();
			displayNewCaption();
		}

		function changeTab(tab) {
			getRidOfOldPicture();
			getRidOfOldCaption();
			getRidOfOldDescription();
			makeAllTabsYellow();
			if (tab.id == "PumpAndHeaterSets") { currentTab = 0; }
			else if (tab.id == "FuelRacks") { currentTab = 1; }
			else if (tab.id == "FuelOilPumpSets") { currentTab = 2; }
			else if (tab.id == "EmergencyGeneratorPumpSets") { currentTab = 3; }
			else if (tab.id == "DayTanks") { currentTab = 4; }
			else if (tab.id == "BatteryOperatedPumpSets") { currentTab = 5; }
			currentImage=0;
			makeThisTabGreen(tab);
			displayNewPicture();
			displayNewCaption();
			displayNewDescription();
		}


		function makeThisTabGreen(tab) {
			tab.style.backgroundColor="#004222";
		}

		function makeAllTabsYellow() {
			var db = document.getElementsByClassName("productNav2");
			for (var i=0; i<db.length; i++) {
							db[i].style.backgroundColor = "transparent";
			}
		}

		function getRidOfOldPicture() {
			var OldPicId = "tag"+currentTab+"img"+currentImage;
			var OldPic = document.getElementById(OldPicId);
			if (OldPic) {
				OldPic.style.display = "none";
			}
			else { console.log("one not found."); }
		}

		function displayNewPicture(){
			var NewPicId = "tag"+currentTab+"img"+currentImage;
			var NewPic = document.getElementById(NewPicId);
			if (NewPic) { NewPic.style.display = "block"; center(NewPic); }
			else { console.log("new pic id: "+NewPicId+" not found"); }
		}

		function displayFirstNewPicture(){
			var NewPicId = "tag"+currentTab+"img"+currentImage;
			var NewPic = document.getElementById(NewPicId);
			if (NewPic) { NewPic.style.display = "block"; NewPic.style.marginLeft = "-22px";
		}
			else { console.log("new pic id: "+NewPicId+" not found"); }
		}

		function getRidOfOldCaption() {
			var OldCapId = "tag"+currentTab+"cap"+currentImage;
			var OldCap = document.getElementById(OldCapId);
			if (OldCap) {
				OldCap.style.display = "none";
			}
			else { console.log("one not found."); }
		}

		function displayNewCaption() {
			var NewCapId = "tag"+currentTab+"cap"+currentImage;
			var NewCap = document.getElementById(NewCapId);
			if (NewCap) { NewCap.style.display = "block"; }
			else { console.log("new pic id: "+NewCapId+" not found"); }
		}

		function getRidOfOldDescription() {
			var OldDesId = "tag"+currentTab+"description";
			var OldDes = document.getElementById(OldDesId);
			if (OldDes) {
				OldDes.style.display = "none";
			}
			else { console.log("one not found."); }
		}

		function displayNewDescription() {
			var NewDesId = "tag"+currentTab+"description";
			var NewDes = document.getElementById(NewDesId);
			if (NewDes) { NewDes.style.display = "block"; }
			else { console.log("new pic id: "+NewDesId+" not found"); }
		}

		function pullDown(){ 

  			x = document.getElementById("dropdown")
	  		if (x) {
	  		x.style.display="block"; x.style.textAlign="center";
	  		}
	  		
	  		navbuttons = document.getElementsByClassName("TopNavBar")
	  		//.style.backgroundColor = "#004222";
	  		for (i = 0; i < navbuttons.length; i++) {
	  			navbuttons[i].style.backgroundColor = "#FFCC00";
	  			//"#004222";
	  		}
	  	}

  		function pullUp(){ document.getElementById("dropdown").style.display="none"; }

  		function makeGreen(x){ x.style.backgroundColor="#004222"}
		function makeYellow(x){ x.style.backgroundColor="transparent"}

		function initializePictureFrame() {
			displayFirstNewPicture();
			displayNewCaption();
			displayNewDescription();

		}