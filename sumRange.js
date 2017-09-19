'use strict';
var matrix = [
  [3,0,1,4,2],
  [5,6,3,2,1],
  [1,2,0,1,5],
  [4,1,0,1,7],
  [1,0,3,0,5]
];
var sumRegion = function(x1,x2,y1,y2) {
  var total = 0;
  for(var i = x1; i <= y1 ; i++){
    var sliced = matrix[i].slice( x2, y2 + 1 );
    total += sliced.reduce( function (acc, ele) {
      return acc + ele;
    },0)
  }
  return total;
}


console.log(sumRegion(2, 1, 4, 3));
console.log(sumRegion(1, 1, 2, 2));
console.log(sumRegion(1, 2, 2, 4));