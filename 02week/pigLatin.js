'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function pigLatin(word) {
  let cut = word.trim().toLowerCase();         // The word inputted will be changed to lowercase and all spaces before and after the word will be trimmed.
  console.log(cut);

  let vowels = ['a', 'e', 'i', 'o', 'u'];      // All possible vowels
  let result = cut.split('');

  if (vowels.includes(cut.charAt(0))) {        // Take the first letter and asks if it's included in the vowels array 
    return cut += 'yay';                       // If the first letter is a vowel, put 'yay' at the end of the word
  } else {
    for (let i = 0; i < cut.length; i++) {     // Create a loop
      if (!vowels.includes(cut[i])) {          // If the string does NOT contain a vowel, then
        result.push(result.shift());           // shift the consonants to the end of the string
      } else {
        result.push('ay');                     // add 'ay' to the beginning of the string
        return result.join('');                // makes all the results a string
      } 
    } 
  } 
}


function getPrompt() {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Tests

if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
    it ('Should separate two words and return them together', () => {
      assert.equal(pigLatin('Hop Fest'), 'Ophay Estfay');
    });
  });
} else {

  getPrompt();

}
