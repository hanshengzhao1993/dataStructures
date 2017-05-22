var quickSort = function (array) {
  if(array.length <= 1) {
    return array;
  }
  var swapPosition = Math.floor((array.length -1)/2);
  var swapValue = array[swapPosition]
  var less = [];
  var more = [];
  array = array.slice(0,swapPosition).concat(array.slice(swapPosition + 1));
  for(var i = 0; i< array.length ; i++) {
    if(array[i] < swapValue) {
      less.push(array[i]);
    } else {
      more.push(array[i]);
    }
  }
  return (quickSort(less)).concat([swapValue],quickSort(more));
}

console.log(quickSort([5,3,1,2,4]))