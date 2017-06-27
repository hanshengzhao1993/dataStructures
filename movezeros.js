var moveZeroes = function(array) {
  var counter = 0;
  for(var i = 0; i< array.length; i++){
    if(array[i] !== 0){
      array[counter] = array[i]
      counter++
    }
  }
  for(;counter< array.length; counter++){
    array[counter]= 0;
  }
  return array;
};

console.log(moveZeroes([0,0,1,2,3,4]))