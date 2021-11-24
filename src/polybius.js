// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    if(input.split(" ").join("").length % 2 == 1 && encode === false) return false; // Error Handling
    const code = input.toLowerCase().split(" "); //seperate each character in the input to lowercase and in it's own array value.
    let wordHolder = [];
    const cipher = {
      a:11,b:21,c:31,d:41,e:51,
      f:12,g:22,h:32,i:42,j:42,k:52,
      l:13,m:23,n:33,o:43,p:53,
      q:14,r:24,s:34,t:44,u:54,
      v:15,w:25,x:35,y:45,z:55
    };
    if(encode === false){ // Begin Decode ---------------------------------
      code.forEach(word => {
        const brokenUp = word.match(/.{1,2}/g); // Breaks up the word into pairs of two integers using Regex.
        let result = [];
        for(let i=0;i<brokenUp.length;i++){
          const current = Object.keys(cipher).find(key => cipher[key] == brokenUp[i]) // Locates the letter in the cipher by matching it's value to the current integer pair.
          if(brokenUp[i]==42){ // checking for I or J to return i/j
            result.push(`i/j`)
          } else { // else pushing the current letter to the result
          result.push(current);
          }
        }
        wordHolder.push(result.join("")); // Pushing the decoded word to a global array.
      });
    } else { // Begin Encode ----------------------------------------------
      code.forEach(word => {
        const brokenUp = word.split(``,); // Splitting each letter in the current word into seperate array values.
        let result = [];
        brokenUp.forEach(letter => {
          result.push(cipher[letter]) // Finding the integer value by the letter in the cipher and returning the integer.
        })
        wordHolder.push(result.join(""));
      })
    }
    return wordHolder.join(" ");
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
