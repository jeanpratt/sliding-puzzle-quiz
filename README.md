# Jean Pratt's Sliding Puzzle

The entire point of this project, insofar as I understand it, is to decode my way of thinking. To help guide you through my process, I've created this guide to list how I plan to approach the challenge. 

This guide will likely change, and all changes will be recorded in Git.

---

## First Goal: What logic is involved?

While I've played a 15-piece puzzle before, I've never actually created a game using a coding language. However, I do alredy have a pretty good idea of how I would design the game using SASS/CSS. Thus, the first, and likely most important, part of this process is dedicated to the logic of how this game will be put together.

**Task 1:** What does it need to do?

1. Have a 3 x 3 gameboard
2. Gameboard has one empty space
3. Tiles surrounding empty space will move there when clicked

Meanwhile, the board also needs to fit within the limitations
given by the assignment. 

- No markup changes are allowed within the body tag for index.html
- The application logic cannot be in the global scope
- No external front-end libraries / frameworks except where expressly permitted

From these specifics I can create an initial idea of how to create the game logic: *Use JavaScript to create a function that initializes when the class "sliding puzzle" is on a `<ul>` element.*

### Edits

There will likely be edits to the original game-logic idea. Edits, and when they were implemented, will be recorded here.

*No edits at this time.*

---

## Second Goal: How should it look?

After determining the logic of the gameboard, the next step is to create the styles. Once I have a rough idea of what logic will be needed within a website, I then like to build the view so that I can work with an idea of how the website/application will look like when functioning. This helps me find bugs and tweak conflicting styles.

**Task 2:** How should it look?

1. Gameboard is black with rounded edges
2. Gameboard has a margin between itself and the tiles
3. Tiles have no space between them
4. Tiles do not have rounded edges
5. A sans-serif font is used
6. All text is black
7. Tiles are given a beveled look
8. The 'top' of each tile is white 

Like the logic of the game, the appearance also must follow certain rules.

- Must keep its proportions regardless of screen size
- Must be consistent across browsers

Since SASS is allowed for this project, I will employ it to expedite the designing process.

### Edits

In this process, it's likely that I will have to make an edit to the original design plan. Edits, and when they were implemented, will be recorded here.

- *2/21/2017, 15:30* - Creating a puzzle that scales proportionally may require JavaScript
- *2/21/2017, 17:30* - Found and implemented method to scale game using SCSS/CSS
- *2/21/2017, 20:10* - Centered text within each tile using SCSS/CSS and JavaScript
- *2/22/2017, 10:55* - Previous method of centering text conflicted with game's logic, was changed

---

## Third Goal: Making it work

Once I've created the format for the board, I can then focus on implementing the game's functionality. Although I have a general sense of how the puzzle would work, I've also taken the time to research practices many employ in coding sliding puzzles. Some of the common themes I can therefore build off of when creating my own.

**Task 3:** How do I code it?

1. Add the empty tile through JavaScript
2. Create an array containing positional information for each tile
3. Attach positional information to appropriate tile
4. Create function to update positional information
5. Create function to find and check where the empty tile is
6. Create function to swap the empty tile with the clicked tile

### Edits

When creating the gaming logic for the puzzle, it is likely that the planned course of implementation will evolve in the process. Edits, and when they were implemented, will be recorded here.

- *2/22/2017, 10:55* - Previous method of centering text conflicted with game's logic, was changed
- *2/22/2017, 12:42* - The game is rendered on page load, so creating the empty tile isn't needed outside the game logic

---

## Fourth Goal: Extra Credit

Although optional, it was strongly advised to complete some of the "extra point" items. I've always been a teacher's pet, so I enjoy any chance to earn a better grade. :-) One of the items included using SCSS, which I did while working on the project itself. However, especially on topics I haven't had a lot of experience with (such as making games), I usually focus first on getting the requirements down. This gives me a better starting point for extra credit items.

**Task 4:** Get that 'A'

* ~~Use Sass or SCSS~~
* Make the same puzzle work for 15 tiles using the same application logic.
* Expose a way to shuffle or disorder the tiles via the console.

First, I'll make my game be more versatile - players will be able to choose either a 3x3 or 4x4 format for playing the puzzle. When I created the game's logic, it was done in a way that allowed for the ability to create different formats. Thus, with a bit of DOM manipulation and minor code editing, I can achieve this goal.

1. Create a new branch to house the different game formats
2. Code necessary utility functions for DOM manipulation
3. Dynamically add an 'options' bar for players to choose a game mode
4. Build two simple objects for separate game formats
5. Replace hard-coded dimensions for the puzzle-board with an object parameter
6. Incorporate SCSS changes for adapting to either format

After creating different formats for the puzzle, I'll now add a way to scramble the order of 
the tiles through the console. Once the function for scrambling has been completed, a parameter to `playGame();` will allow a user to do so.

1. Create a new branch to house the scramble function
2. Build scramble function
3. Add parameter to `playGame();`
4. Incoporate parameter upon page load and button call

### Edits

Unlike the previous "Edit" sections, this one will also record when each mini-goal was completed.

- *2/22/2017, 21:10* - Created buttons will have event listeners attached to them
- *2/22/2017, 23:37* - Fixed bug affecting how the game rendered
- *2/23/2017, 00:20* - Added light interactive styling to buttons
- *2/23/2017, 00:21* - **Mini-goal Complete:** 15-tile puzzle