# Task: <br/>

To build a functioning browser based game that pushes your understanding of JavaScript.

## Approach: <br/>

- I chose to build a matching pairs or memory game
- The concept of the game is to match all of the Zodiac signs using the least number of moves possible.

- Breaking down the problem --> (pseudocode)
- At the start of the game the cards values are hidden
- The game begins when the user clicks on a card
- The first card is flipped to reveal the image underneath, the second card is then selected.
- They are compared to see if they match - if they successfully match the cards remain face up, if no match is found, the cards flip back over and the check for match process starts again.
- After each check-for-match, the moves count is incremented by 1 point.
- Once all of the pairs have been matched, alert the user.
- To restart the game (without refreshing the page) user can click on the restart button.

1. Started by storing the data in a function that returns an array of objects, with their relevant names and image paths. All png images I will be using for the cards are saved in an image folder, where their relevant paths match those in the array of objects.

2. The first function, randomiseCards - ensures that the cardData array is sorted randomly, so each time the game is played the cards aren't in the same position on the board.

3. The createCards function, calls the randomiseCards function, returning an array of objects.
I've then looped over these objects using a forEach and dynamically created the image elements with their relevant src properties, appending them to the board. I've also applied classes to each element to allow me to apply styles to them.
At the end of the createCards function, I've added an event listener to listen out for each click event on the card. Inside this event listener I toggle styles on the card (to simulate a flip) and run the checkForMatch function, passing in the click event.

4. In the checkForMatch function I find the element that was clicked using (e.target) and apply a class of 'flipped' to it. Note this class is not used for styling - purely functional. The cards with a class of 'flipped' are saved in the variable 'flippedCards'. Once flippedCards.length === 2 (i.e. 2 cards have been flipped), do a check to see if their names attributes match.

If a match is found, I remove the class of 'flipped', add a class of 'matched' and prevent further clicks on the card by setting the pointerEvent to 'none'.
I've then created a variable called 'matchedCards' which selects all elements with a class of 'matched'. Once matchedCards.length is equal to 16 (i.e. all elements on the board have been found) create an alert popup after 500ms.

Else if no match is found, I remove the 'flipped' class on the card and after 750ms I remove the 'toggleCard' class ready to check the next two cards that are selected.
After each go (whether matched or not) the scoreCount incremements by 1 and the display is updated.
This checkforMatch function will run on every click event until all matches have been found.

5. restartGame function - on the click event, this function randomises the cards ready for a new game. It selects all the cardFace elements with a class of 'face' and also selects all 'card' elements with a class of card.
Using another forEach, I remove all of the classes applied to the cards, enable the user to once again click on the elements and apply the images and set name attributes to each card.
I also reset the score count and update the display, ready to play the game again.

### Requirements: <br/>

- Pseudocode - break down your approach.
- Public repo with at least 15 Git commits.
- JS code formatted as functions or classes.
- Use click and keypress events to trigger the events within the game, avoiding using refresh to start the game again.
- Mobile first, responsive design.
- Linked to your portfolio.


### Next Steps: <br/>
- Add in a timer to the game