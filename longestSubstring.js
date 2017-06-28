var lengthOfLongestSubstring = function(str) {
  console.log(str)
  var largestSubString = '';
  var currentString = '';

  for(var i = 0; i< str; i++){
    if(!currentString.includes(str[i])){
      currentString = currentString + str[i]
    } else {
      if(currentString.length > largestSubString.length){
        largestSubString = currentString;
        currentString = '';
      }
    }
  }
  return largestSubString;
};


console.log(lengthOfLongestSubstring('bbbbbb'))
console.log(lengthOfLongestSubstring('abcabcbb'))
console.log(lengthOfLongestSubstring('pwwkew'))
