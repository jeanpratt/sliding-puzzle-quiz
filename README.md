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