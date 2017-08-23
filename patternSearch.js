'use strict';
var string = 'ABCDDCDABCDABCDDDCDA';
var inputString = 'AB*D';


let patternSearch = function (string, subString) {
  let count = 0;

  for(var i = 0; i< string.length; i++){
    if(string[i] === subString[0]){
      // first letters are the same now check it
      var slicedString = string.slice(i, i + subString.length);
      console.log(slicedString)
      var sameWord = true;

      for(var j = 0; j< subString.length; j++){
        if(subString[j] === '*'){
          continue;
        }
        if(subString[j] !== slicedString[j]){
          sameWord = false;
        }
      }
      if(sameWord){
        count++;
      }
    }
  }
  return count;
} 

console.log(patternSearch(string, inputString))