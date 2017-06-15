var quickSort = function (array) {
  var currentPivot = [array[array.length - 1]];
  var left = [], right = [];
  if(array.length ===0){
    return array;
  }
  for(var current = 0; current< array.length - 1; current++){
    if(array[current] < currentPivot){
      left.push(array[current])
    }else {
      right.push(array[current])
    }
  }
  console.log('left: ', quickSort(left))
  console.log('right: ', right)
  // return left.concat(currentPivot, right)
  return quickSort(left).concat(currentPivot, quickSort(right))

}

console.log(quickSort([11, 16, 2, 8, 1, 9, 4, 7]))

// console.log(quickSort([2,1,4]))