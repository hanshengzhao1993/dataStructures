var camelCase = function (s) {
  if(s.length > 0){
    var count = 1;
    for(var i = 1; i< s.length; i++){
      if(s[i].toUpperCase() === s[i]){
        count++;
      }
    }
    return count;
  }
  return 0;
}


console.log(camelCase('saveChangesInTheEditor'))