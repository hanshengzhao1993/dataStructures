var flatten = function (array, flattenArray){
  var resultArray = [];
  flattenArray = flattenArray || [];

  for(var i = 0; i < array.length; i++){
    if( Array.isArray(array[i])){
      resultArray = resultArray.concat(flatten(array[i]))
    }
    else {
      resultArray.push(array[i])
    }
  }

  return resultArray;
}


// console.log(flatten([[1,2,3],[4,5,6],[7,8,9], 10]));
// console.log(flatten([[1,2,[4,5,6],[7,8]],[[[{9:9}]]]]));


var indexArray = function (array, index) {
  var result = [];

  for(var i = 0; i< array.length; i++){
    result[index[i]] = array[i]
  }
  return result
}


function mutate(input, specArr) { 
  var visited = []; 
  specArr.forEach(function(newIdx, i) {
    var tmp; visited.push(newIdx); 
    if (visited.indexOf(i) < 0) { 
      tmp = input[i]; 
      input[i] = input[newIdx]; 
      input[newIdx] = tmp; 
    }
  });
  return input;
};

var swapArray = function (array, index1, index2) {
  var temp = array[index2];
  array[index2] = array[index1];
  array[index1] = temp;
}

var muateArray = function (arrayEle, arrayIndex) {
  for(var i =0; i<arrayEle.length; i++){
    while(arrayIndex[i] !== i){
      var tempIndex = arrayIndex[i];
      swapArray(arrayIndex, i, temp)
      swapArray(arrayEle, i, temp);
    }
  }
  return arrayEle
}

console.log(mutate(["a", "b", "c", "d", "e", "f"], [2, 3, 4, 0, 5, 1]));












