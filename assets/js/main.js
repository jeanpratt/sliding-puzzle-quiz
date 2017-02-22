/********

	Author:		Jean D. Pratt
	Date:		February 21, 2017
	Project:	Sliding Puzzle Quiz (Swirl)
	
	Table of Contents:
		1. @Utility
		2. @Centered Text
		3. @Game Logic
	
********/


/********

	@Utility
	
********/

function $_class(ele) { return document.getElementsByClassName(ele); }


/********

	@Centered Text
	
********/

// Get puzzle
var puzzles = $_class('sliding-puzzle');

// In case there are multiple puzzles
for (i = 0; i < puzzles.length; i++) {
	
	// Select tiles
	var tiles = puzzles[i].getElementsByClassName('tile');
	
	// For each text node within a tile, wrap the node within a span
	for (j = 0; j < tiles.length; j++) {
		var tileNumber = tiles[j].firstChild,
			tileSpan = document.createElement('span');
			
		tileSpan.appendChild(document.createTextNode(tileNumber.nodeValue));
		tiles[j].replaceChild(tileSpan, tileNumber);
	}
}