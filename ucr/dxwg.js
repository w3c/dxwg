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
