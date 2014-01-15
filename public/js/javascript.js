		function makeImageHeightEqualWidth(){
	  		var wideness = document.getElementById('textImage').clientWidth;
	  		var ContainerElementz = document.getElementsByClassName('SubContent');
	  		for(var i =0;i<ContainerElementz.length; i++){
	  			ContainerElementz[i].style.height = wideness+"px"; 
	  		}
	  	}

	  	var CurrentSection = 0;
	  	var ArrayPosition = 0;
	  	var NodePosition = new Array(0,0,0,0,0,0,0,0);

	  	function getPicArray() {
	  		//var PicSections = new Array();
	  		//console.log("Pic array num: "+CurrentSection);
	  		if (CurrentSection === 0) { return NewsPics.slice(0); }
	  		if (CurrentSection === 1) { return SpecialsPics.slice(0); }
	  		if (CurrentSection === 2) { return ListPics.slice(0); }
	  		if (CurrentSection === 3) { return NewPics.slice(0); }
	  		if (CurrentSection === 4) { return InfoPics.slice(0); }
	  		if (CurrentSection === 5) { return ContactPics.slice(0); }
	  		if (CurrentSection === 6) { return FactsPics.slice(0); }
	  		if (CurrentSection === 7) { return LinksPics.slice(0); }
	  	}

	  	function getCapArray() {
	  		if (CurrentSection === 0) { return NewsCaps.slice(0); }
	  		if (CurrentSection === 1) { return SpecialsCaps.slice(0); }
	  		if (CurrentSection === 2) { return ListCaps.slice(0); }
	  		if (CurrentSection === 3) { return NewCaps.slice(0); }
	  		if (CurrentSection === 4) { return InfoCaps.slice(0); }
	  		if (CurrentSection === 5) { return ContactCaps.slice(0); }
	  		if (CurrentSection === 6) { return FactsCaps.slice(0); }
	  		if (CurrentSection === 7) { return LinksCaps.slice(0); }
	  	}
	  	//NewsPics(), SpecialsPics, ListPics, NewPics, InfoPics, ContactPics, FactsPics, LinksPics);
	  	//var CapSections = new Array(NewsCaps, SpecialsCaps, ListCaps, NewCaps, InfoCaps, ContactCaps, FactsCaps, LinksCaps);
	  	var Sections = new Array("News", "Specials", "List", "New", "Info", "Contact", "Facts", "Links");
	  	var ButtonNames = new Array("News", "Specials", "Beers", "Beers", "Info", "", "Facts", "Links")
	  	function printNodePositionArray(){
	  		for (x=0;x<NodePosition.length;x++){
	  			console.log("Section: "+x);
	  			console.log("Number: "+NodePosition[x]);
	  		}
	  	}

	  	function initAll(){
	  		//document.getElementsByTagName("form")[0].onsubmit = addNodes;
	  		addNodes();
	  		//addNodes();
	  		//printNodePositionArray();
	  	}
	  	function setCurrentSection(Section) {

	  		if (Section.className) { 
	  			//console.log("className:"+Section.className);
	  			if (Section.className === "News") { CurrentSection = 0; }
	  			if (Section.className === "Specials") { CurrentSection = 1; }
	  			if (Section.className === "List") { CurrentSection = 2; }
	  			if (Section.className === "New") { CurrentSection = 3; }
	  		}
	  	}

	  	function addNodesButton(Section) {
	  		var MakeInvisible = false;
	  		var ChangeTextLess = false;
	  		var ChangeTextMore = false;
	  		var Parent = Section.parentNode.parentNode;
	  		setCurrentSection(Parent);
	  		if (getPicArray().length < 5 ) {
	  			MakeInvisible = true;
	  		}
	  		if (NodePosition[CurrentSection] === ((Math.ceil(getPicArray().length/4)*4) - 4)) {
	  			console.log("works!");
	  			ChangeTextLess = true;
	  		}
	  		if (getPicArray().length < NodePosition[CurrentSection] + 1 ) {
	  			//console.log("reached max");
	  			removePictures(Parent);
	  			removeCaptions(Parent);
	  			NodePosition[CurrentSection] = 0;
	  			window.location="#"+Sections[CurrentSection];
	  			ChangeTextMore = true;
	  		}
	  		//console.log("NodePosition: "+ NodePosition[CurrentSection]);
	  		for (q=0; q<1; q++) {	// iterating through the different Sections
	  			//CurrentSection = 1;
	  			outerPictureShell = addPictureLines();
	  			outerCaptionShell = addCaptionLines();
	  			//console.log("HERE");
	  			//console.log("outerPictureShell: "+outerPictureShell);
	  			//console.log("outerCaptionShell: "+outerCaptionShell);
	  			var InsertionHappened = false;
	  			//var docBody = document.getElementsByClassName(Sections[q])[0];
	  			var Parent = Section.parentNode.parentNode;
	  			//Parent.style.backgroundColor = "red";
	  			if (outerPictureShell != null) {
		  			//var docBody = document.getElementsByClassName(Sections[q])[0];
		  			//docBody.appendChild(outerPictureShell);
		  			InsertionHappened = true;
		  		}
		  		if (outerCaptionShell != null) {
		  			//docBody.appendChild(outerCaptionShell);
		  			InsertionHappened = true;
		  		}
		  		if (InsertionHappened) { 
		  			//console.log("InsertionHappened");
		  			//docBody.appendChild(addBottomButton(Sections[q]));
		  			//reorderDivs(Sections[q]);

		  			//var Parent = document.getElementsByClassName(Sections[q])[0];
			  		var Children = Parent.children;
			  		var ChildrenPics = new Array();
			  		var ChildrenCaps = new Array();

			  		q=0; z=0;
			  		for (i=0; i<Children.length; i++){
			  			if (Children[i].className){
			  				if (Children[i].className === "CenteringContentZ" ){
			  					ChildrenPics[q] = Children[i]; q++;
			  				}
			  				if (Children[i].className === "CenteringContentCap" ){
			  					ChildrenCaps[z] = Children[i]; z++;
			  				}
			  			}
			  		}
			  		console.log("Pics: "+q+" Caps: "+z);
			  		for (i = 0; i < Children.length; i++){
			  			if (Children[i].className){
				  			if (Children[i].className === "Bar") { var divOne = Children[i]; }
				  			if (Children[i].className === "CenteringContentZ") { var divThree = Children[i]; }
				  			if (Children[i].className === "CenteringContentCap") { var divFour = Children[i]; }
				  			if (Children[i].className === "navLink") { var divFive = Children[i]; }
				  			if (Children[i].className === "showMoreButton") { var divSix = Children[i]; }
				  			if (Children[i].className === "showLessButton") { var divSeven = Children[i]; }
				  		}
				  		else { if (Children[i].getElementsByTagName("h1")) { var divTwo = Children[i]; }  }

			  		}
			  		if (divOne) { Parent.appendChild(divOne); }
			  		if (divTwo) { Parent.appendChild(divTwo); }
			  		for (i=0; i<ChildrenPics.length; i++){
			  			if (ChildrenPics[i] != null) { Parent.appendChild(ChildrenPics[i]); }
			  			if (ChildrenCaps[i] != null) { Parent.appendChild(ChildrenCaps[i]); }
			  		}
			  		if (outerPictureShell != null) { Parent.appendChild(outerPictureShell); }
			  		if (outerCaptionShell != null) { Parent.appendChild(outerCaptionShell); }
			  		if (divFive) { Parent.appendChild(divFive); }
			  		if (divSix) { Parent.appendChild(divSix); }
			  		if (divSeven) { Parent.appendChild(divSeven); }
			  		NodePosition[CurrentSection] += 4;
			  		if (MakeInvisible) { divSix.style.display = "none"; }
			  		if (ChangeTextLess) { divSix.innerHTML = "<p onclick=\"addNodesButton(this)\">Show Less "+ButtonNames[CurrentSection]+"</p>"; }
			  		if (ChangeTextMore) { divSix.innerHTML = "<p onclick=\"addNodesButton(this)\">Show More "+ButtonNames[CurrentSection]+"</p>"; }
		  		}
	  			CurrentSection++;
	  		}

	  		ArrayPosition= ArrayPosition + 4;
	  		CurrentSection = 0;
	  		makeImageHeightEqualWidths();
	  		return false;
	  	}
	  	
	  	function addNodes() {
		  	for (q=0; q<4; q++) {
		  		var MakeInvisible = false;
		  		CurrentSection = q;
		  		//console.log("array: "+getPicArray().length);
				if (getPicArray().length <= 4 ) {
		  			MakeInvisible = true;
		  		}	
	  			outerPictureShell = addPictureLines();
	  			outerCaptionShell = addCaptionLines();
	  			var InsertionHappened = false;
	  			var docBody = document.getElementsByClassName(Sections[q])[0];
	  			if (outerPictureShell != null) {
		  			//var docBody = document.getElementsByClassName(Sections[q])[0];
		  			//docBody.appendChild(outerPictureShell);
		  			InsertionHappened = true;
		  		}
		  		if (outerCaptionShell != null) {
		  			//docBody.appendChild(outerCaptionShell);
		  			InsertionHappened = true;
		  		}
		  		if (InsertionHappened) { 
		  			//docBody.appendChild(addBottomButton(Sections[q]));
		  			//reorderDivs(Sections[q]);

		  			var Parent = document.getElementsByClassName(Sections[q])[0];
			  		var Children = Parent.children;
			  		//console.log("THIS STUFF YO: "+Children.length);
			  		for (i = 0; i < Children.length; i++){
			  			if (Children[i].className){
				  			if (Children[i].className === "Bar") { var divOne = Children[i]; }
				  			if (Children[i].className === "CenteringContentZ") { var divThree = Children[i]; }
				  			if (Children[i].className === "CenteringContentCap") { var divFour = Children[i]; }
				  			if (Children[i].className === "navLink") { var divFive = Children[i]; }
				  			if (Children[i].className === "showMoreButton") { var divSix = Children[i]; }
				  			if (Children[i].className === "showLessButton") { var divSeven = Children[i]; }
				  		}
				  		else { if (Children[i].getElementsByTagName("h1")) { var divTwo = Children[i]; }  }

			  		}
			  		if (divOne) { Parent.appendChild(divOne); }
			  		if (divTwo) { Parent.appendChild(divTwo); }
			  		if (divThree) { Parent.appendChild(divThree); }
			  		if (divFour) { Parent.appendChild(divFour); }
			  		if (outerPictureShell != null) { Parent.appendChild(outerPictureShell); }
			  		if (outerCaptionShell != null) { Parent.appendChild(outerCaptionShell); }
			  		if (divFive) { Parent.appendChild(divFive); }
			  		if (divSix) { Parent.appendChild(divSix); }
			  		if (divSeven) { Parent.appendChild(divSeven); }

			  		if (MakeInvisible) { divSix.children[0].style.display = "none"; }


		  		}
		  		NodePosition[CurrentSection] += 4;
	  			CurrentSection++;
	  		}

	  		ArrayPosition= ArrayPosition + 4;
	  		CurrentSection = 0;
	  		/*
	  		outerPictureShell2 = addPictureLines();
	  		outerCaptionShell2 = addCaptionLines();

	  		var docBody2 = document.getElementsByClassName("Specials")[0];
	  		docBody2.appendChild(outerPictureShell2);
	  		docBody2.appendChild(outerCaptionShell2);
			*/
	  		return false;
	  	}

	  	function removePictures(Parent){
	  		ChildNodes = Parent.children;
	  		if (ChildNodes){
	  			for (q=0; q<ChildNodes.length; q++){
		  			if (ChildNodes[q].className ===  "CenteringContentZ" ){
		  				Parent.removeChild(ChildNodes[q]);
		  				removePictures(Parent);
		  			}
		  		}
	  		}
	  	}

	  	function removeCaptions(Parent){
	  		//console.log("in removeCaptions");
	  		ChildNodes = Parent.children;
	  		if (ChildNodes){
	  			for (q=0; q<ChildNodes.length; q++){
	  				//console.log("className: "+ChildNodes.length);
		  			if (ChildNodes[q].className === "CenteringContentCap" ){
		  				//console.log("in removeCaptions");
		  				Parent.removeChild(ChildNodes[q]);
		  				removeCaptions(Parent);
		  			}
		  		}
	  		}
	  	}

	  	function addPictureLines() {
	  		var source = getPicArray();
	  		//console.log("source.length: "+source.length);
	  		if (source.length < NodePosition[CurrentSection] + 1) { return null; }
	  		var newBox = new Array();
	  		var innerPicShell = document.createElement("div");
	  		innerPicShell.setAttribute("class","SubContent");
	  		for (i=NodePosition[CurrentSection]; i<NodePosition[CurrentSection]+4; i++) {
	  			if (i<source.length){
		  			var newImage = document.createElement("img");
		  			newImage.setAttribute("class", "ImageInStoryBox");
		  			newImage.setAttribute("src", source[i]);
		  			newBox[i] = document.createElement("div");
		  			newBox[i].setAttribute("class","StoryBox");
		  			newBox[i].appendChild(newImage);
		  			innerPicShell.appendChild(newBox[i]);
		  		}
	  		}
	  		var outerPictureShell = document.createElement("div");
	  		outerPictureShell.setAttribute("class", "CenteringContentZ");
	  		outerPictureShell.appendChild(innerPicShell);
	  		return outerPictureShell;
	  	}

	  	function addCaptionLines(){
	  		var inText = getCapArray();
	  		if (inText.length < NodePosition[CurrentSection] + 1) { return null; }
	  		var wrapper = new Array();
	  		var innerCapShell = document.createElement("div");
		  	innerCapShell.setAttribute("class", "CapContent");
	  		for (i =NodePosition[CurrentSection]; i<NodePosition[CurrentSection]+4; i++) {
	  			if (i<inText.length){
			  		var newText = document.createTextNode(inText[i]);
			  		var newGraf = document.createElement("h3");
			  		newGraf.appendChild(newText);
			  		wrapper[i] = document.createElement("div");
			  		wrapper[i].setAttribute("class","caption");
			  		wrapper[i].appendChild(newGraf);
			  		innerCapShell.appendChild(wrapper[i]);
			  	}
		  	}
	  		var outerCaptionShell = document.createElement("div");
	  		outerCaptionShell.setAttribute("class", "CenteringContentCap");
	  		outerCaptionShell.appendChild(innerCapShell);
	  		return outerCaptionShell;
	  	}


	  	function addBottomButton(SectionName){
	  		//deleteOtherButtons(SectionName);
	  		var inText = "show more";
	  		var shell = document.createElement("div");
	  		shell.setAttribute("class", "showMoreButton");
	  		var newText = document.createTextNode(inText);
	  		var newGraf = document.createElement("p");
	  		newGraf.appendChild(newText);
	  		shell.appendChild(newGraf);
	  		return shell;
	  	}

	  	function addShowLessButton(SectionName){
	  		var inText = "show less";
	  		var shell = document.createElement("div");
	  		shell.setAttribute("class", "showMoreButton");
	  		var newText = document.createTextNode(inText);
	  		var newGraf = document.createElement("p");
	  		newGraf.appendChild(newText);
	  		shell.appendChild(newGraf);
	  		return shell;

	  	}


	  	function deleteOtherButtons(SectionName) {
	  		console.log("SectionName: " + SectionName);

	  		var Children = document.getElementsByClassName("showMoreButton");
	  		console.log("Children LENGTH: "+Children.length);
	  		for (i=0; i<Children.length; i++){
				if (Children[i].parentNode.className === SectionName) { 
					Children[i].style.display = "none"; 
					//document.removeChild(Children[i]); 
				}
			}
	  	}

	  	function reorderDivs(SectionName) {

	  		var Parent = document.getElementsByClassName(SectionName)[0];
	  		var Children = Parent.children;
	  		console.log("THIS STUFF YO: "+Children.length);
	  		for (i = 0; i < Children.length; i++){
	  			if (Children[i].className){
		  			if (Children[i].className === "Bar") { var divOne = Children[i]; }
		  			if (Children[i].className === "CenteringContentZ") { var divThree = Children[i]; }
		  			if (Children[i].className === "CenteringContentCap") { var divFour = Children[i]; }
		  			if (Children[i].className === "navLink") { var divFive = Children[i]; }
		  			if (Children[i].className === "showMoreButton") { var divSix = Children[i]; }
		  		}
		  		else { if (Children[i].getElementsByTagName("h1")) { var divTwo = Children[i]; }  }

	  		}
	  		if (divOne) { Parent.appendChild(divOne); }
	  		if (divTwo) { Parent.appendChild(divTwo); }
	  		if (divThree) { Parent.appendChild(divThree); }
	  		if (divFour) { Parent.appendChild(divFour); }
	  		if (divFive) { Parent.appendChild(divFive); }
	  		if (divSix) { Parent.appendChild(divSix); }


	  		/*

	  		Bar
	  		h1
	  		CenteringContentZ
	  		CenteringContentCap
	  		navLink
			showMoreButton

	  		*/
	  		/*
	  		var Things = document.getElementsByClassName("showMoreButton");
			console.log("THINGS LENGTH: "+Things.length);
			console.log("sfd: "+document.getElementsByClassName('myStyle')[0].className);
			console.log("sfd: "+document.getElementsByClassName('showMoreButton')[7].className);

			if (Things[7].parentNode.className === "Links"){ Things[7].style.color = "red"; }
			for (i=0; i<Things.length; i++){
				if (Things[i].parentNode.className === "Links") {Things[i].style.color = "blue"; }
				else { Things[i].style.color = "purple"; }
			}
			*/
	  	}















