/**
 * @param {string} s
 * @return {number}
 */
 
var lengthOfLongestSubstring = function(str) {
  console.log(str)
  var largestSubString = '';
  var currentString = '';

  for(var i = 0; i< str.length; i++){
    if(!currentString.includes(str[i])){
      currentString = currentString + str[i]
    } else {
      if(currentString.length > largestSubString.length){
        largestSubString = currentString;
        currentString = str[i];
      }
    }
  }
  return largestSubString.length;
};
