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
// console.log(flatten([[1,2,[4,5,6],[7,8]],[[[[[[[[9]]]]]]]]]));


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

var mutateArray = function (arrayEle, arrayIndex) {
  for(var i =0; i<arrayEle.length; i++){
    while(arrayIndex[i] !== i){
      var tempIndex = arrayIndex[i];
      swapArray(arrayIndex, i, tempIndex);
      swapArray(arrayEle, i, tempIndex);
    }
  }
  return arrayEle
};

var mutateArraySplice = function (arrayEle, arrayIndex) {
  for(var i = 0; i< arrayIndex.length; i++){
    var tempIndex = arrayIndex[i];
    var length = arrayIndex.length;
    arrayEle[tempIndex+length] = arrayEle[i];
  }

  return arrayEle.splice(6);
}


var mutate2 = function (array, index) {
  var i = 0;

 while (i < index.length) {
    if (index[i] === i) {
      i++;
    } else {
      var swapIndex = index[i];
      swapArray(array, i, swapIndex);
      swapArray(index, i, swapIndex);
    }
    
  }
  return array;
}

var flattenReduce = function (array) {
  return array.reduce(function (acc, ele) {
    return acc.concat(Array.isArray(ele) ? flattenReduce(ele) : ele);
  },[])
}

console.log(flattenReduce([[[1]],2,[[[[[4]]]]]]))

// console.log("MUTATE ARRAY: ",mutateArray(["a", "b", "c", "d", "e", "f"], [2, 3, 4, 0, 5, 1]));

// console.log("MUTATE ARRAY SPLICE: ",mutateArraySplice(["a", "b", "c", "d", "e", "f"], [2, 3, 4, 0, 5, 1]));

// console.log("MUTATE ARRAY: ",mutateArray(["a", "b", "c", "d", "e", "f"], [0, 3, 4, 2, 5, 1]));

// console.log("MUTATE ARRAY: ",mutate2(["a", "b", "c", "d", "e", "f"], [0, 3, 4, 2, 5, 1]));












