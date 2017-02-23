/********

	Author:		Jean D. Pratt
	Date:		February 21, 2017
	Project:	Sliding Puzzle Quiz (Swirl)
	
	Table of Contents:
		1. @Utility
		2. @Game Features
		3. @Game Logic
	
********/


/********

	@Utility
	
********/

function createButton(newButton, newText) {
	newButton = document.createElement("BUTTON");
	newText = document.createTextNode(newText);
	newButton.appendChild(newText);
	
	return newButton
}


/********

	@Game Board
	
********/

// Get puzzle
var puzzles = document.getElementsByClassName('sliding-puzzle');

// In case there are multiple puzzles
for (i = 0; i < puzzles.length; i++) {
	
	// Set ID of current puzzle
	puzzleID = "sliding-puzzle-" + (i + 1);
	puzzles[i].setAttribute("id", puzzleID);
	
	// Set game state for current puzzle
	playGame(puzzleID);
}


/********

	@Game Logic
	
********/

function playGame(puzzleID) {
	// Select game board and create tile array
	var puzzleBoard = document.getElementById(puzzleID),
		puzzleTiles = { tiles: [1, 2, 3, 4, 5, 6, 7, 8, "B"] };
	
	// Add a listener for when the selected board is clicked
	puzzleBoard.addEventListener("click", function handleClick(event) { 
		
		// Get the index of the currently clicked tile
		var index = parseInt(event.target.dataset.index),
			blank = moveBlank();
		
		// Returns positional information of where the blank should go
		function moveBlank() {
			var up = index - 3, down = index + 3, left = index - 1, right = index + 1;
		
			if (index >= 3 && blankCheck(up)) { return up; }
			if (index < 6 && blankCheck(down)) { return down; }
			if ((index % 3) > 0 && blankCheck(left)) { return left; }
			if ((index % 3) < 2 && blankCheck(right)) { return right; }
		}
		
		// Check to see if the blank tile is selected
		function blankCheck(index) { return puzzleTiles.tiles[index] == "B"; }
		
		// Swaps the blank tile with a number tile
		function swapTile(index1, index2) {
			var position = puzzleTiles.tiles[index1];
			
			puzzleTiles.tiles[index1] = puzzleTiles.tiles[index2];
			puzzleTiles.tiles[index2] = position;
			
			console.log(puzzleTiles.tiles[index1], puzzleTiles.tiles[index2]);
		}
		
		// Ignore clicks not on tiles
		if (event.target.className.indexOf("tile") == -1) { return; }
		// Ignore clicks on blank tile
		else if ( blankCheck(index) ) { return; }
		// Ignore invalid clicks
		else if ( blank == null ) { return; }
		
		// If passes checks, swap tile
		swapTile(index, blank);
		// Once tile is swapped, set the board
		setBoard(puzzleBoard, puzzleTiles);
	});
	
	// Sets the board on load and resets when tile is swapped
	function setBoard(thisBoard, thisTile) {
		var newTile = "";
		newTile = thisTile.tiles.map(setTile).join("");
		thisBoard.innerHTML = newTile;
		
		function setTile(id, index) { 
			if (id == "B") { return "<li class='tile blank' data-index='" + index + "'>" + id + "</div>"; }
			else { return "<li class='tile' data-index='" + index + "'>" + id + "</div>"; }
		}
	}
	
	// Set the board on page load
	setBoard(puzzleBoard, puzzleTiles);
}