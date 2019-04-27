'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

function printStacks() {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

function movePiece(startStack, endStack) {
//Take the chosen starStack and pop off the last number in the array
let piece = stacks[startStack].pop();
console.log(piece);
//Take the number that was popped off and push it on to a new array(endStack)
stacks[endStack].push(piece);
}

function isLegal(startStack, endStack) {
  //putting smaller numbers after bigger numbers in the array
  //have to take numbers from an array with numbers in it
  let startArray = stacks[startStack];
  let endArray = stacks[endStack];
  let selectedItemIndex = startArray.length-1;
  let destinationItemIndex = endArray.length-1;
  // cant take a number out of an empty array
  if (startArray == []) {
    return false;
  }
  //if the end array is empty, then we can put a stack there
  if (endArray == []) {
    return true;
  } else if (startArray[selectedItemIndex] > endArray[destinationItemIndex]) {
      return false;
  } else 
      return true;
}


function checkForWinB() {
// b or c with 4 items in the array and other two arrays have to be empty
  if (stacks.b.length === 4) {
    //looping to .length -1 to create a stopping point
    for (let i = 0; i < stacks.b.length -1; i++) {
      if (stacks.b[i] > stacks.b[i+1]) {
        continue;
      } else {
        return false;
      }
    } 
    return true;
  }
}


function checkForWinC() {
  // b or c with 4 items in the array and other two arrays have to be empty
    if (stacks.c.length === 4) {
      //looping to .length -1 to create a stopping point
      for (let i = 0; i < stacks.c.length -1; i++) {
        if (stacks.c[i] > stacks.c[i+1]) {
          continue;
        } else {
          return false;
        }
      } 
      return true;
    }
  }


  function checkForWin() {
    //an xor could be used here?
    if (checkForWinB() || checkForWinC()) {
      return true;
    }
    return false;
  }


function towersOfHanoi(startStack, endStack) {
  // If the startStack and endStack is truthy, move the piece
  if (isLegal(startStack,endStack)) {
    movePiece(startStack, endStack);
  // If falsey, tell the user it's an invalid move
  } else {
    console.log('Not a valid move');
  } 
    if (checkForWin() === true) {
      console.log("You Won!!");
    }
}



function getPrompt() {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#towersOfHanoi()', () => {
    it('should be able to move a block', () => {
      towersOfHanoi('a', 'b');
      assert.deepEqual(stacks, { a: [4, 3, 2], b: [1], c: [] });
    });
  });

  describe('#isLegal()', () => {
    it('should not allow an illegal move', () => {
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: []
      };
      assert.equal(isLegal('a', 'b'), false);
    });
    it('should allow a legal move', () => {
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: []
      };
      assert.equal(isLegal('a', 'c'), true);
    });
  });
  describe('#checkForWin()', () => {
    it('should detect a win', () => {
      stacks = { a: [], b: [4, 3, 2, 1], c: [] };
      assert.equal(checkForWin(), true);
      stacks = { a: [1], b: [4, 3, 2], c: [] };
      assert.equal(checkForWin(), false);
    });
  });

  //ADDITIONAL TESTS

  // A column that has 3 numbers in the right order can not be a win
  describe('#towersOfHanoi()', () => {
    it('should not win with only 3 numbers in order', () => {
      stacks = {a:[4,3,2], b: [1], c: [] };
      assert.deepEqual(checkForWin(), false);
    });
  });

  // Don’t check for a win on ‘a’ at all
  describe('#towersOfHanoi()', () => {
    it('should not win on columnA', () => {
      stacks = {a:[4,3,2,1], b: [], c: [] };
      assert.deepEqual(checkForWin(), false);
    });
  });

  // Check the return type of the checkForWin function
  describe('#towersOfHanoi()', () => {
    it('should show that the return type of checkForWin is equal to a boolean', () => {
      stacks = {a:[4,3,2,1], b: [], c: [] };
      assert.deepEqual(typeof checkForWin(), "boolean");
    });
  });


  

} else {

  getPrompt();

}
