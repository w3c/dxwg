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

function resetFilter(){
	var chBoxes = document.getElementsByTagName('input');
	for(var i = 0; i < chBoxes.length; i++) {
		if(chBoxes[i].type == 'checkbox'){
			chBoxes[i].checked = false;
			chBoxes[i].parentElement.classList.remove('checked');
		}
	}
	applyFilter();
}

//https://stackoverflow.com/a/45657360
function swap(node1, node2) {
    const afterNode2 = node2.nextElementSibling;
    const parent = node2.parentNode;
    node1.replaceWith(node2);
    parent.insertBefore(node1, afterNode2);
}

function sortContent(){
	var reqFirst = document.getElementById("req_first").checked;
	var contentSections = document.getElementsByClassName("contentSection");
	if(reqFirst && contentSections[0].id == "UseCases"){
		swap(contentSections[0], contentSections[1]);
	}
	else if(!reqFirst && contentSections[0].id == "Requirements"){
		var reqs = contentSections[0];
		swap(contentSections[0], contentSections[1]);
	}

}

function toggleUseCases(){

	var collapsed = document.getElementById("uc_collapsed").checked;
	var toggles = document.getElementsByClassName("expandOrCollapse");

	for(var i = 0; i < toggles.length; i++) {
		if(collapsed){
			// expect at most 1
			var visible = toggles[i].parentNode.querySelectorAll("div.visible");
			if(visible.length > 0){
				visible[0].className = 'hidden';
				toggles[i].innerHTML = '&#9654; Full use case description (click to expand)';
			}
		}
		else{
			var hidden = toggles[i].parentNode.querySelectorAll("div.hidden");
			if(hidden.length > 0){
				hidden[0].className = 'visible';
				toggles[i].innerHTML = '&#9650; Full use case description (click to collapse):';
			}			
		}
	}
}
// TODO: Improve by using indexes (create onload)
// TODO: Optimize code reuse
// TODO: Trigger respec to update the TOC
function applyFilter(){

	sortContent();
	toggleUseCases();

	var tagSelection = [];
	// Collect selected tags
	var chBoxes = document.getElementsByTagName('input');
	for(var i = 0; i < chBoxes.length; i++) {
		if(chBoxes[i].type == 'checkbox' && chBoxes[i].checked == true && chBoxes[i].name == 'tag_filter') tagSelection.push("'"+chBoxes[i].value+"'");
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
			if(ucSelection.indexOf(uc.id) == -1){
				ucSelection.push(uc.id);
			}
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
	if(relatedReqs){
		var reqLink = createSectionLink(r);
			relatedReqs.appendChild(reqLink);
	}
}

// Creates a local link to supplied section (usecase or requirement)
function createSectionLink(section){
	// label added by respec script, otherwise {section.h3}
	var a  = document.createElement("a");
	a.setAttribute("href", "#" + section.id);	
	return a;
}

addRelatedRequirements();


