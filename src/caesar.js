// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function codeShift(arrayIn, arrayOut, type) { // Helper function
    if (type === `toNumbers`) { // Change all of the letters to their ASCII code value.
      for (let i = 0; i < arrayIn.length; i++) {
        arrayOut.push(arrayIn.toLowerCase().charCodeAt(i));
      }
    } else if (type === `toLetters`) { // Change all of the ASCII code values to their respective characters.
      for (let i = 0; i < arrayIn.length; i++) {
        arrayOut.push(String.fromCharCode(arrayIn[i]));
      }
    }
  }
  
  function caesar(input, shift, encode = true) {
    if (!shift || shift === 0 || shift < -25 || shift > 25) return false; // Error Handling
    if (!encode) { shift = -shift }; //If we are deciding, shift in the other direction.
    let str = [];
    let numResult = [];
    let result = [];
    codeShift(input, str, `toNumbers`); // Helper Function
    str.forEach((letter) => { // Shifting logic ------------------------------------
      if(letter >= 97 && letter <= 122){ // If the current character is within the ASCII values of the lowercase alphabet
        let current = letter + shift; // Finding the sum value of the shifted ASCII character
        if(current < 97) current = 123 - (97 - current); // If the current character results lower than the ASCII value of a, loop back to z and move down
        if(current > 122) current = 96 + (current-122); // If the current character results higher than the ASCII value of z, loop down to a and move up
        numResult.push(current);
      } else { // else if it is a space or punctuation
        numResult.push(letter);
      }
    });
    codeShift(numResult, result, `toLetters`); // Helper function
    return result.join("");
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
