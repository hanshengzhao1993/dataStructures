'use strict'

const unique = (string)=>{
  var obj = {};
  for(var i = 0; i< string; i++){
    if(obj[string[i]] === undefined){
      obj[string[i]] = string[i];
    } 
    else {
      return false;
    }
  }
  return true;
}

