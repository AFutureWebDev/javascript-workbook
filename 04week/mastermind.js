'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let board = [];
let solution = '';
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

function printBoard() {
  for (let i = 0; i < board.length; i++) {
    console.log(board[i]);
  }
}

function generateSolution() {
  for (let i = 0; i < 4; i++) {
    const randomIndex = getRandomInt(0, letters.length);
    solution += letters[randomIndex];
  }
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function generateHint(solution, guess) {
  // Create variables solutionArray and guessArray that each split up passed in arguments, .splitting on ''(empty string).
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  // Create a variable correctLetterLocations that will record how many correct "letter-locations" were guessed. Set correctLetterLocations equal to 0. In a for loop, iterate over the solutionArray, comparing each index of solutionArray against the same index of guessArray. If the item matches, increment correctLetterLocations, and set that index in solutionArray to null.
  let correctLetterLocations = 0;
  for (let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]) {
      correctLetterLocations = correctLetterLocations + 1;
      solutionArray[i] = null;
    }
   // Set a variable correctLetters equal to 0, and in a for loop, again iterate over the solutionArray. Using .indexOf, determine if the item at the current index in guessArray appears inside of solutionArray. Save that index in a variable called targetIndex. Now, if targetIndex is greater than -1, increment correctLetters and set the item in solutionArray at that index equal to null.
  }
  let correctLetters = 0;
  for (let n = 0; n < solutionArray.length; n++) {
    let targetIndex = guessArray.indexOf(solutionArray[n]);
    if (targetIndex > -1) {
      correctLetters = correctLetters + 1;
      solutionArray[n] = null;
    } 
  }
  // combine correctLetterLocations and correctLetters 
return correctLetterLocations + "-" + correctLetters;
}



function mastermind(guess) {
  solution = 'abcd'; 
   // After 10 incorrect guesses, if the board length equals 10, return 'You ran out of turns! The solution was ' and the solution. Otherwise, return 'Guess again.'
 if (board.length == 10) {
  return `You ran out of turns! The solution was ${solution}.`;
} else {
  // if the guess is not the solution, provide the user with hints and if they guess the solution, inform the user
   if (guess != solution) {
    let hints = generateHint(solution, guess);
    board.push("guess: " + guess + ", " + hints)
  } else {
    console.log('You guessed it!');
    return "You guessed it!";
  }
 }
}


function getPrompt() {
  rl.question('guess: ', (guess) => {
    mastermind(guess);
    printBoard();
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {
  solution = 'abcd';
  describe('#mastermind()', () => {
    it('should register a guess and generate hints', () => {
      mastermind('aabb');
      assert.equal(board.length, 1);
    });
    it('should be able to detect a win', () => {
      assert.equal(mastermind(solution), 'You guessed it!');
    });
  });

  describe('#generateHint()', () => {
    it('should generate hints', () => {
      assert.equal(generateHint(solution,'abdc'), '2-2');
    });
    it('should generate hints if solution has duplicates', () => {
      assert.equal(generateHint(solution,'aabb'), '1-1');
    });

  });

} else {

  generateSolution();
  getPrompt();
}
