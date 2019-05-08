'use strict';

const assert = require('assert');

//.map Function
let array = [10, 20, 30, 40, 50];
function map(arr, callback) {
  //create an empty array to store the looped thru elements
  let newArray = [];
  //loop thru the array
  for(let i = 0; i < arr.length; i++) {
    //the callback takes the number in the array
    //save it to variable element
    let elements = callback(arr[i]);
    //push all of the saved elements into the new array
    newArray.push(elements);
  }
  //returns a new array
  return newArray;
}
//calling the function
let mapIt = map(array, function(n){
  return n;
})
  console.log(mapIt);


//.fitler Funtion
let arr = [1, 2, 3, 4, 5, 6];   //not sure why this variable isn't being read?
function filter(arr, callback) {
  const array = [];

  //loop thru the given array
  for(let i =0; i < arr.length; i++) {
    const result = callback(arr[i], i, arr);
    //push the current element if result is true
    if (result)
    array.push(arr[i]);
  }
  return array;
}
const oddArr = function filter(arr, num) {
  (num % 2 === 0);
  console.log(oddArr);
}


//.reduce Function
//variable that checks objects
const checkObject = [{price: 10},{price: 20}, {price: 30}];
//variable that checks arrays
const checkArray = [10,20,30];
function reduce(array, accumulator) {
  //the accumulator equals what the user puts in OR zero
  accumulator = accumulator || 0;
  //loop thru the given array or object
  for (let index = 0; index < array.length; index++) {
    //if the array is a number...
    if(typeof array[index] == 'number') {
      //then the number at array[index] is added to the accumulator
      accumulator = accumulator + array[index];
      //if the array is an object...
    } else if (typeof array[index] == 'object') {
      //loop thru the object
      for(let i in array[index]) {
        //add the value of the object to the accumulator
        accumulator = accumulator + array[index][i];
      }
    }
  }
  return accumulator;
}

const sum = reduce(checkArray, 10); // set accumulator to 10
console.log("ANSWER: ", sum);



if (typeof describe === 'function') {
  describe('#map()', () => {
    const arr = [1, 2, 3];
    const mapped = map(arr, (num) => {
      return num * num;
    });
    it('should return new array with mapped items', () => {
      assert.deepEqual(mapped, [1, 4, 9]);
    });
    it('should not affect the original array', () => {
      assert.deepEqual(arr, [1, 2, 3]);
    })
  });

  describe('#reduce()', () => {
    it('should return array elements added together', () => {
      const reduced = reduce([1, 2, 3], 0);
      assert.deepEqual(reduced, 6);
    });
  });

  describe('#filter()', () => {
    it('should return an array of items that pass the predicate test', () => {
      const filtered = filter([1, 2, 3], (num) => {
        return num % 2 === 0;
      });
      assert.deepEqual(filtered, [2]);
    });
  });
} else {
  console.log('Only run the tests on this one!')
}
