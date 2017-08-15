'use strict';

var testArray = [1,2,3,4,5,6,7,8,9]

var binarySearch = function (array, max, min, value) {
  max = max || array.length -1 ;
  min = min || 0;
  var middle = Math.floor((max - min)/2);

  if( array[middle] === value ){
    return middle;
  }
  if( array[middle] > value){
    return binarySearch(array, middle, min, value)
  } else {
    return binarySearch(array, max, middle, value)
  }

}