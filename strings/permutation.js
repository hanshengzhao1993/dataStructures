'use strict';
const isPermutation = (str1, str2) =>{
  var longerString = str1.length > str2.length ? str1: str2;
  var shorterString = str1.length < str2.length ? str1: str2;
  var obj = {};
  for(var i = 0; i < longerString.length; i++){
    if(obj[longerString[i]] === undefined){
      obj[longerString[i]] = {
        long: 1,
        short: 0
      }
    } else {
      obj[longerString[i]].long++;
    }
  }

  for(var j = 0; j < shorterString.length; j++){
    if(obj[shorterString[j]] === undefined){
      obj[shorterString[j]] = {
        long: 0,
        short: 1
      }
    } else {
      obj[shorterString[j]].short++;
    }
  }
  for(var key in obj){
    if(obj[key].short > obj[key].long){
      return false;
    }
  }
  return true;
}
console.log(isPermutation('hen', 'sheng'))