'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  // Possible horizontal wins
  let winArrH = board[[0][0,1,2],[1][0,1,2],[2][0,1,2]];
}

function verticalWin() {
  // Possible vertical wins
  let winArrV = board[[0][0][0],[1][1][1],[2][2][2]];
}

function diagonalWin() {
  // Possible diagonal wins
  let winArrD = board[[0][0],[1][1],[2][2],[0][2],[1][1],[2][0]];
}

function checkForWin() {
  // Your code here
  for (let i = 0; i < board.length; i++) {
    if (horizontalWin() == true) {
      console.log(playerTurn + "wins!");
    }
  }
}

function ticTacToe(row, column) {
  // If player X makes a move, return an X in the designated position, then switch to player O
  if (playerTurn === "X") {
    board[row][column] = playerTurn;
    playerTurn = "O";

  // If player 0 makes a mvoe, return an O in the designated position, then switch to player X
  } else if (playerTurn === "O") {
    board[row][column] = playerTurn;
    playerTurn = "X";
  // If an X or an O is already in the space, write nothing
  } 
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}



// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
