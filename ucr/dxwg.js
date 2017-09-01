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
