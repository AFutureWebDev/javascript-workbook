'use strict';

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

// function resetBoard() {
//   console.log("clear")
//   let boxes = document.getElementsById("clear_btn");
//   for (var i=0; i<boxes.length; i++) {
//       boxes[i].innerHTML = "";
//   }
// }

function horizontalWin() {
  // Possible horizontal wins
  let winArrH = board[0][0];
  if ((board[0][0] == playerTurn && board[0][1] == playerTurn && board[0][2] == playerTurn) || (board[1][0] == playerTurn && board[1][1] == playerTurn && board[1][2] == playerTurn) || (board[2][0] == playerTurn && board[2][1] == playerTurn && board[2][2] == playerTurn)) {
    return true;
  }
}

function verticalWin() {
  // Possible vertical wins
  let winArrV = board[0][0];
  if ((board[0][0] == playerTurn && board[1][0] == playerTurn && board[2][0] == playerTurn) || (board[0][1] == playerTurn && board[1][1] == playerTurn && board[2][1] == playerTurn) || (board[0][2] == playerTurn && board[1][2] == playerTurn && board[2][2] == playerTurn)) {
    return true;
  }
}

function diagonalWin() {
  // Possible diagonal wins
  let winArrD = board[0][0];
  if ((board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) || (board[0][2] == playerTurn && board[1][1] == playerTurn && board[2][0] == playerTurn)) {
    return true;
  }
}

function checkForWin() {
  // check all the possible win options
  if (horizontalWin()) {                  // check if there is a horizontal win
    return true;
  } else if (verticalWin()) {             // check if there is a vertical win
    return true;
  } else if (diagonalWin()) {             // check if there is a diagonal win
    return true;
  }
}

function ticTacToe(row, column) {
  // If player X makes a move, return an X in the designated position, then switch to player O
  let playerTurn = document.querySelector("box").innerText;
  if (playerTurn === "X") {
    board[row][column] = playerTurn;
    playerTurn = "O";

  // If player 0 makes a move, return an O in the designated position, then switch to player X
  } else if (playerTurn === "O") {
    board[row][column] = playerTurn;
    playerTurn = "X";
  } 
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
