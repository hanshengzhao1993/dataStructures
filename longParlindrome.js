'use strict';
var longestPalindrom = function (str) {
  var longestPalindromeString = '';

  for(var i = 0; i < str.length; i++){
    // evens
    var n = 1;
    while( str[i + n] && str[i - n] ){
      var tempWord1 = str.slice( i - n, i + n);
        if(palindrome(tempWord1)){
          if(tempWord1.length > longestPalindromeString.length){
            longestPalindromeString = tempWord1;
          }
        }else {
          break;
        }
      n++
    }

    // odds
    var j = 1;
    while( str[i + j] && str[i - j] ){
      var tempWord = str.slice( i - j, i + j + 1 );
      if( palindrome(tempWord) ){
        if(tempWord.length > longestPalindromeString.length){
          longestPalindromeString = tempWord;
        }
      } else {
        break;
      }
      j++
    }
  }

  return longestPalindromeString;
}


var palindrome = function (str) {
  return str === str.split('').reverse().join('');
}

console.log(longestPalindrom("cbbd"))
console.log(longestPalindrom("babad"))
console.log(longestPalindrom("forgeeksskeegfor"));
