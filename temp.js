function substitution(input, alphabet, encode = true) {
      if (!alphabet || alphabet.length !== 26 || new Set(alphabet).size !== 26) return false; // Error Handling
      const alph = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];
      const message = input.toLowerCase().split("");
      let result = [];
    
      message.forEach((char) => {
        if (!encode) { // Begin Decode -------------------------------
          const index = alphabet.indexOf(char); // Finding the index number of the current character within the cipher alphabet.
           if (alph.includes(char) || alphabet.includes(char)) { // If the current character is within the actual alphabet or the alphabet cipher.
            result.push(alph[index]);
          } else { // Else if it is punctuation or a space
            result.push(char);
          }
        } else {   // Begin Encode -----------------------------------
          const index = alph.indexOf(char); // Finding the index number of the current character on the actual alphabet.
          if (alph.includes(char)) { // If the current character is within the actual alphabet.
            result.push(alphabet[index]);
          } else { // Else if it is punctuation or a space
            result.push(char);
          }
        }
      });
      return result.join("");
    }

  

    console.log(substitution("j.vvc..","plmo.nijbuhvygctfxrdzeswaq", false));