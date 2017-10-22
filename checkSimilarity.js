'use strict';
var checkSimilarLetters = function (word1, word2) {
  for(var i = 0; i < word1.length; i++){
    if( word2.includes( word1[i] ) ){
      return false;
    }
  }
  return true;
};

var maxProduct = function (words) {
  var answers = 0;
  for(var i = 0; i < words.length; i++){
    for(var j = i+1; j< words.length; j++){
      if(checkSimilarLetters(words[i], words[j])){
        var lengths = words[i].length * words[j].length;
        if(lengths > answers){
          answers = lengths;
        }
      }
    }
  }
  return answers;
}

console.log(maxProduct(["abcw", "baz", "foo", "bar", "xtfn", "abcdef"]));
console.log(maxProduct(["a", "ab", "abc", "d", "cd", "bcd", "abcd"]));
console.log(maxProduct(["a", "aa", "aaa", "aaaa"]));
console.log(checkSimilarLetters('han', 'eg'))