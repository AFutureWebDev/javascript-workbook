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

function resetBoard() {
  //find element with class name 'box'
  let boxes = document.getElementsByClassName("box");
  //loop through the boxes and clear each box
  for (var i=0; i<boxes.length; i++) {
      boxes[i].innerHTML = "";
      board = [
        [' ', ' ', ' '],
        [' ', ' ', ' '],
        [' ', ' ', ' ']
      ];
  }
}

function horizontalWin() {
  // Possible horizontal wins
  if ((board[0][0] == playerTurn && board[0][1] == playerTurn && board[0][2] == playerTurn) || (board[1][0] == playerTurn && board[1][1] == playerTurn && board[1][2] == playerTurn) || (board[2][0] == playerTurn && board[2][1] == playerTurn && board[2][2] == playerTurn)) {
    return true;
  }
}

function verticalWin() {
  // Possible vertical wins
  if ((board[0][0] == playerTurn && board[1][0] == playerTurn && board[2][0] == playerTurn) || (board[0][1] == playerTurn && board[1][1] == playerTurn && board[2][1] == playerTurn) || (board[0][2] == playerTurn && board[1][2] == playerTurn && board[2][2] == playerTurn)) {
    return true;
  }
}

function diagonalWin() {
  // Possible diagonal wins
  if ((board[0][0] == playerTurn && board[1][1] == playerTurn && board[2][2] == playerTurn) || (board[0][2] == playerTurn && board[1][1] == playerTurn && board[2][0] == playerTurn)) {
    return true;
  }
}

function checkForWin() {
  // check all the possible win options
  if (horizontalWin() || verticalWin() || diagonalWin()) {   
          // If there is a win, display on the webpage...
    document.getElementById("winner").innerText = (playerTurn + ' Wins!');
  }
}

function ticTacToe(row, column, id) {
  console.log(playerTurn);
  if(board[row][column] == " ") {
  document.getElementById(id).innerHTML = (playerTurn);
  board[row][column] = playerTurn;
  console.log(board);
  checkForWin();
  // If player X makes a move, return an X in the designated position, then switch to player O
  if (playerTurn === "X") {
    playerTurn = "O";

  // If player 0 makes a move, return an O in the designated position, then switch to player X
  } else if (playerTurn === "O") {
    playerTurn = "X";
    }
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
