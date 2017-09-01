/* Based on SDWWG template */

/* For DXWG Note purposes the UC descriptions are initially expanded to enable full text search and indexing */ 
function toggleVisibility(elem) {	// expand or collapse the next div
	var divs = document.getElementsByTagName("div");
	for(var i = 0; i < divs.length;i++) // find the next div element
		if(divs[i] == elem) {
			var item = divs[i + 1];
		}
	if (item) {
		if (item.className=='hidden') {
			item.className = 'visible';
			elem.innerHTML = '&#9650; Full use case description (click to collapse):';
		}	else {
			item.className = 'hidden';
			elem.innerHTML = '&#9654; Full use case description (click to expand):';
		}
	}
}

function toggle(chBox){
	if(chBox.checked) chBox.parentElement.classList.add('checked'); else chBox.parentElement.classList.remove('checked')
}

function init(){	
	var chBoxes = document.getElementsByTagName('input');
	var filter = false;
	for(var i = 0; i < chBoxes.length; i++) {
		if(chBoxes[i].type == 'checkbox' && chBoxes[i].checked == true){
				chBoxes[i].parentElement.classList.add('checked');
				filter = true;
		}
	}
	if(filter){
		applyFilter();
	}
}

function applyFilter(){
	
	var tagSelection = [];
	// Collect selected tags
	var chBoxes = document.getElementsByTagName('input');
	for(var i = 0; i < chBoxes.length; i++) {
		if(chBoxes[i].type == 'checkbox' && chBoxes[i].checked == true) tagSelection.push("'"+chBoxes[i].value+"'");
	}
	// Process use cases selected by tag
	var ucSelection = [];
	var ucs = document.getElementsByClassName("usecase");
	for(var i = 0; i < ucs.length; i++){
		var uc = ucs[i];
		var tags = uc.querySelectorAll("p.tags > span.tag");
		// Consider UC selected when no filter defined 
		var selected = tagSelection.length == 0;
		var j = 0;
		while(j < tags.length && ! selected){
			if(tagSelection.indexOf("'"+tags[j].textContent+"'") > -1){
				 selected = true;
				 ucSelection.push(uc.id);
			}
			j+=1;
		}
		if(!selected){
			uc.style.display = 'none';
		}
		else{
			uc.style.display = 'block';
		}
	}
	// Process requirements
	var reqs = document.getElementsByClassName("requirement");
	for(var i = 0; i < reqs.length; i++){
		var req = reqs[i]; 
		var links = req.querySelectorAll("p.relatedUseCases > a");
		var selected = false;
		var j = 0;
		// Display when refering to a selected use case
		while(j < links.length && ! selected){
			var link = links[j];
			var id = link.getAttribute("href").replace("#","");	
			if(ucSelection.indexOf(id) == -1){
				req.style.display = 'none';
				selected = true;
			}
			else{
				req.style.display = 'block';
			}
			j += 1;
		}
	} 
}


// Extension to create back-references from requirements to related use cases
function addRelatedRequirements(){
	var reqs = document.getElementsByClassName("requirement");
	for (var i = 0; i < reqs.length; i++){
		var req = reqs[i]; 
		var links = req.querySelectorAll("p.relatedUseCases > a");
		for (var j = 0; j < links.length; j++){
			var link = links[j];
			var id = link.getAttribute("href").replace("#","");
			var uc = document.getElementById(id);
			addRelatedRequirement(uc,req);
		} 
	}
}

// Augments supplied use case by a link to the related requirement
function addRelatedRequirement(uc,r){
	// Related requirements are enclosed within the last p element
	var relatedReqs = uc.querySelectorAll("p.relatedRequirements")[0];
	var reqLink = createSectionLink(r);
		relatedReqs.appendChild(reqLink);		
}

// Creates a local link to supplied section (usecase or requirement)
function createSectionLink(section){
	// label added by respec script, otherwise {section.h3}
	var a  = document.createElement("a");
	a.setAttribute("href", "#" + section.id);	
	return a;
}

addRelatedRequirements();


