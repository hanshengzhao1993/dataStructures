'use strict'


// Time 0(N) 
// Additional Space: O(N)
const unique = (string)=>{
  var obj = {};
  for(var i = 0; i< string.length; i++){
    if(obj[string[i]] === undefined){
      obj[string[i]] = 1;
    } else {
      return false;
    }
  }
  return true;
}

// first sort the string
// then iterate to find dups
// since it is sorted same letter will be next to each other so we  can find out if there are dups
const uniqueNoDS = (string) =>{
  string = string.split('').sort();
  for(var i = 1; i< string.length; i++){
    if(string[i] === string[i-1]){
      return false
    }
  }

  return true;
}


console.log(uniqueNoDS('hanh'))
console.log(uniqueNoDS('zhao'))