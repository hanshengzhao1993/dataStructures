var fs = require('fs');
var dictionary = null;

// reading the file 

fs.readFile('dictionary.txt', 'utf8', function (err, data) {
  if(err) {
    throw err;
  } else {
    // spliting the dictionary into an array

    dictionary = (JSON.stringify(data)).split('\\n');

    // main function to return the result of letters at each index
    var returnWords = function (array, word) {
      // object to keep track of letters on key and words in value
      // value is an array
      var resultObject = {};

      // allitems array keep track of already used items from the dictionary so no dups
      var allItems = [];

      // loop through the given word 
        // slice out the part of the word we are using
      for(var j = 0; j< word.length; j++){

        // assigned currentLetter to the letter we are using
        var currentLetters = word.slice(j, word.length);

        // this array is part of resultObject;
        resultObject[currentLetters] = [];

        // loop through whole array to find matches of words
        for(var i = 0; i< array.length; i++){

          // reverse both words to use indexOf to see if its first letter
          var reversedWord = array[i].split('').reverse().join('');
          var reversedGivenInput = currentLetters.split('').reverse().join('');

          // if first letter push into array created 
          if(reversedWord.indexOf(reversedGivenInput) === 0){
            // push item into result Array
            if(allItems.indexOf(array[i]) === -1){
              resultObject[currentLetters].push(array[i]);
            }
            allItems.push(array[i])
          }
        }

      }

      // now loop through the object based on the lettterCount start at 1
      var letterCount = 1;
      // while letterCount is less than word length
      while(letterCount <= word.length){
        // loop through the object
        for(var key in resultObject){
          if(key.length === letterCount){
            // console low the match and the letter
            console.log('resultObject key: ',key)
            console.log(`match ${letterCount} letter (${key})`)
            // loop through the array of the object
            resultObject[key].forEach( function (ele) {
              // console log the each element inside the object
              console.log(ele);
            })
          }
        }
        //increcment lettercount until it gets to the word length
        letterCount++;
      }
      // return resultObject;
    }

    returnWords(dictionary, 'duck')

  }
})
