'use strict';
var printSpiral = function (array ,height ,width) {
  var answer = [];
  var direction = ['right', 'down', 'left', 'up'];
  var top = 0,
  bottom = height - 1,
  left = 0,
  right = width -1;

  while( top <= bottom && left <= right ){
    if(direction[0] === 'right'){
      for(var i = left; i<= right; i++){
        answer.push(array[top][i])
      }
      top++;
      direction.push(direction.shift());
    }
    if(direction[0] === 'down'){
      for(var j = top; j<= bottom; j++){
        answer.push(array[j][right]);
      }
      right--;      
      direction.push(direction.shift());
    }
    if(direction[0] === 'left'){
      for(var n = right; n >= left; n--){
        answer.push(array[bottom][n]);
      }
      bottom--;
      direction.push(direction.shift());
    }
    if(direction[0] === 'up'){
      for(var p = bottom; p >= top; p--){
        answer.push(array[p][left]);
      }
      left++;
      direction.push(direction.shift());
    }
  }

  return answer;
}

var testingArray1 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12],
  [13,14,15,16]
]

console.log(printSpiral(testingArray1, testingArray1.length, testingArray1[0].length))