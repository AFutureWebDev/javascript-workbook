'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


class Checker {
  //create a checker with different symbols
  constructor(color) {
    if (color === 'white') {
      this.symbol = '○';
        } else {
      this.symbol = '●';
    }
  }
}

class Board {
  constructor() {
    //an array that will hold our checker pieces 
    this.grid = [];
    //a repository of checker pieces
    this.checkers = [];
}
  
  // method that creates an 8x8 array, filled with null values
  createGrid() {
    // loop to create the 8 rows
    for (let row = 0; row < 8; row++) {
      this.grid[row] = [];
      // push in 8 columns of nulls
      for (let column = 0; column < 8; column++) {
        this.grid[row].push(null);
      }
    }
  }
  viewGrid() {
    // add our column numbers
    let string = "  0 1 2 3 4 5 6 7\n";
    for (let row = 0; row < 8; row++) {
      // we start with our row number in our array
      const rowOfCheckers = [row];
      // a loop within a loop
      for (let column = 0; column < 8; column++) {
        // if the location is "truthy" (contains a checker piece, in this case)
        if (this.grid[row][column]) {
          // push the symbol of the check in that location into the array
          rowOfCheckers.push(this.grid[row][column].symbol);
        } else {
          // just push in a blank space
          rowOfCheckers.push(' ');
        }
      }
      // join the rowOfCheckers array to a string, separated by a space
      string += rowOfCheckers.join(' ');
      // add a 'new line'
      string += "\n";
    }
    console.log(string);
  }

  createCheckers() {
    let whitePositions = [
      [0, 1], [0, 3], [0, 5], [0, 7],
      [1, 0], [1, 2], [1, 4], [1, 6],
      [2, 1], [2, 3], [2, 5], [2, 7]
    ];
    //starting positions of all the white checker pieces
  
    let blackPositions = [
      [5, 0], [5, 2], [5, 4], [5, 6],
      [6, 1], [6, 3], [6, 5], [6, 7],
      [7, 0], [7, 2], [7, 4], [7, 6]
    ];
    //starting positions of all the black checker pieces

    //loop through the checkers array and place the starting checkers where they belong  
    for(let i = 0; i < 12; i++) {
      let whiteChecker = new Checker('white');
      let whiteRow = whitePositions[i][0];
      let whiteColumn = whitePositions[i][1];

      let blackChecker = new Checker('black');
      let blackRow = blackPositions[i][0];
      let blackColumn = blackPositions[i][1];

      this.checkers.push(whiteChecker, blackChecker);
      this.grid[whiteRow][whiteColumn] = whiteChecker;
      this.grid[blackRow][blackColumn] = blackChecker;
    }
  }
    //selects a checker
    selectChecker(row, column) {
      return this.grid[row][column];
    }
    // remove a checker if a checker jumps another checker
    killChecker(position) {
      let checker = this.selectChecker(position[0], position[1]);
      let indexChecker = this.checkers.indexOf(checker);
      this.checkers.splice(indexChecker, 1);

      this.grid[position[0]][position[1]] = null;
    }
}

class Game {
  constructor() {
    this.board = new Board;
  }
  start() {
    this.board.createGrid();
    this.board.createCheckers(); 
  }
  //move the selected checker to a new destination on the grid
  moveChecker(start, end) {
    let startRow = parseInt(start[0]);  
    let startColumn = parseInt(start[1]); 
    let endRow = parseInt(end[0]);  
    let endColumn = parseInt(end[1]); 

    let checker = this.board.selectChecker(start[0], start[1]);

    this.board.grid[endRow][endColumn] = checker;
    this.board.grid[startRow][startColumn] = null;

    //determine if a checker has been jumped and should be removed
    if (Math.sqrt((endRow - startRow)^2 + (endColumn - startColumn)^2) >=2) {
      this.board.killChecker([(endRow + startRow) / 2, (endColumn + startColumn) / 2]);
    }
  }
}

function getPrompt() {
  game.board.viewGrid();
  rl.question('which piece?: ', (whichPiece) => {
    rl.question('to where?: ', (toWhere) => {
      game.moveChecker(whichPiece, toWhere);
      getPrompt();
    });
  });
}

const game = new Game();
game.start();


// Tests
if (typeof describe === 'function') {
  describe('Game', () => {
    it('should have a board', () => {
      assert.equal(game.board.constructor.name, 'Board');
    });
    it('board should have 24 checkers', () => {
      assert.equal(game.board.checkers.length, 24);
    });
  });

  describe('Game.moveChecker()', () => {
    it('should move a checker', () => {
      assert(!game.board.grid[4][1]);
      game.moveChecker('50', '41');
      assert(game.board.grid[4][1]);
      game.moveChecker('21', '30');
      assert(game.board.grid[3][0]);
      game.moveChecker('52', '43');
      assert(game.board.grid[4][3]);
    });
    it('should be able to jump over and kill another checker', () => {
      game.moveChecker('30', '52');
      assert(game.board.grid[5][2]);
      assert(!game.board.grid[4][1]);
      assert.equal(game.board.checkers.length, 23);
    });
  });
} else {
  getPrompt();
}
