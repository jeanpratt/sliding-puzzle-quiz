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
	
	return newButton;
}


/********

	@Game Features
	
********/

// Get puzzles
var puzzles = document.getElementsByClassName('sliding-puzzle');

// In case there are multiple puzzles
for (i = 0; i < puzzles.length; i++) {
	
	// Set ID of current puzzle
	puzzleID = "sliding-puzzle-" + (i + 1);
	puzzles[i].setAttribute("id", puzzleID);
	
	// Construct option bar
	var optionBar = document.createElement("div");
	optionBar.className = "sliding-puzzle-options";

	// Add an option bar after each puzzle
	puzzles[i].parentNode.insertBefore(optionBar, puzzles[i].nextSibling);
	
	// Set initial game state for current puzzle
	playGame(puzzleID, 3);
}

// Get option bars
var optionBars = document.getElementsByClassName("sliding-puzzle-options");

// Add buttons to chose format
for (i = 0; i < optionBars.length; i++) {
	
	// Select puzzle for option bar
	var siblingID = optionBars[i].previousSibling.id;
	// Create buttons
	var button3x3 = createButton(button3x3, "Play 3x3 Format"),
		button4x4 = createButton(button4x4, "Play 4x4 Format");
		
	// Add event listeners
	button3x3.addEventListener('click', function() { playGame(siblingID, 3); });
	button4x4.addEventListener('click', function() { playGame(siblingID, 4); });
	
	// Add to option bar
	optionBars[i].appendChild(button3x3);
	optionBars[i].appendChild(button4x4);
}


/********

	@Game Logic
	
********/

function playGame(puzzleID, puzzleSize) {
	
	// Select game board
	var puzzleBoard = document.getElementById(puzzleID);
	
	// Create puzzle types and generic puzzle variable
	var puzzle3x3 = { size: 3, tiles: [1, 2, 3, 4, 5, 6, 7, 8, "B"] },
		puzzle4x4 = { size: 4, tiles: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, "B"] },
		puzzle = (puzzleSize == 3) ? puzzle3x3 : puzzle4x4;
		
	// Create new SCSS class for puzzleBoard
	var boardType = "puzzle" + puzzle.size + "x" + puzzle.size;
	
	// Update puzzleBoard classes
	puzzleBoard.className = 'sliding-puzzle ' + boardType;
	
	// Add a listener for when the selected board is clicked
	puzzleBoard.addEventListener("click", function handleClick(event) { 
		
		// Get the index of the currently clicked tile
		var index = parseInt(event.target.dataset.index),
			blank = moveBlank();
		
		// Returns positional information of where the blank should go
		function moveBlank() {
			var up = index - puzzle.size, down = index + puzzle.size, left = index - 1, right = index + 1;
		
			if (index >= puzzle.size && blankCheck(up)) { return up; }
			if (index < ((puzzle.size - 1) * puzzle.size) && blankCheck(down)) { return down; }
			if ((index % puzzle.size) > 0 && blankCheck(left)) { return left; }
			if ((index % puzzle.size) < 2 && blankCheck(right)) { return right; }
		}
		
		// Check to see if the blank tile is selected
		function blankCheck(index) { return puzzle.tiles[index] == "B"; }
		
		// Swaps the blank tile with a number tile
		function swapTile(index1, index2) {
			var position = puzzle.tiles[index1];
			
			puzzle.tiles[index1] = puzzle.tiles[index2];
			puzzle.tiles[index2] = position;
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
		setBoard(puzzleBoard, puzzle);
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
	setBoard(puzzleBoard, puzzle);
}