/********

	Author:		Jean D. Pratt
	Date:		February 21, 2017
	Project:	Sliding Puzzle Quiz (Swirl)
	
	Table of Contents:
		1. @Game Board
		2. @Game Logic
	
********/


/********

	@Game Board
	
********/

// Get puzzle
var puzzles = document.getElementsByClassName('sliding-puzzle');

// In case there are multiple puzzles
for (i = 0; i < puzzles.length; i++) {
	
	// Set ID of current puzzle
	puzzleID = "sliding-puzzle-" + (i + 1);
	puzzles[i].setAttribute("id", puzzleID)
	
	// Create blank tile
	var tileBlank = document.createElement("li");
	tileBlank.setAttribute("class", "tile");
	tileBlank.dataset.index = 9;
	puzzles[i].appendChild(tileBlank);
	
	// Select tiles
	var tiles = puzzles[i].getElementsByClassName('tile'),
		numberTiles = parseInt(tiles.length) - 1;
	
	// For each text node within a tile, wrap the node within a span
	// Add 'title' attribute for each tile
	for (j = 0; j < numberTiles; j++) {
		var tileNumber = tiles[j].firstChild,
			tileSpan = document.createElement('span');
		
		// Append text value to span and replace original child
		tileSpan.appendChild(document.createTextNode(tileNumber.nodeValue));
		tiles[j].replaceChild(tileSpan, tileNumber);
		
		// Add 'title' attribute
		tiles[j].dataset.index = j + 1;
	}
	
	playGame(puzzleID);
}


/********

	@Game Logic
	
********/

function playGame(puzzleID) {
	var puzzleBoard = document.querySelector("#" + puzzleID),
		puzzleTiles = { tiles: [] };
		
	for (i = 0; i < 8; i++) {
		puzzleTiles.tiles.push(i + 1);
	}
	puzzleTiles.tiles.push("blank");
}