var zombieCluster = function (array) {
  var count = 0;
  for(var i = 0; i< array.length; i++){
    for(var j = 0; j<array.length; j++){
      var recurse = function (array, i, j) {
        if(array[i][j] === 1){
          array[i][j] === 0;
          // top
          if(i - 1> -1 && j > -1){
            var top = array[i - 1][j];
            if(top === undefined){
              top = 0;
            }
          }
          if(i > -1 && j+1 > -1){
            var right = array[i][j + 1];
            if(right === undefined){
              right = 0;
            }
          }
          if(i + 1 > -1 && j > -1 && i + 1 < array.length){
            var bottom = array[i + 1][j];
            if(bottom === undefined){
              bottom = 0;
            }
          }
          if(i > -1 && j-1 > -1){
            var left = array[i][j - 1];
            if(left === undefined){
              left = 0;
            }
          }
          // top right left bottom
          if(top === 1){
            recurse(array, i - 1, j)
          }
          if(right === 1){
            recurse(array, i, j + 1)
          }
          if(bottom === 1){
            recurse(array, i + 1, j)
          }
          if(left === 1){
            recurse(array, i, j - 1)
          }
            return 1;
        } else {
          return 0;
        }
      }
      count = count + recurse(array, i, j)
    }
  }
  return count;
}

var a = [[1,1,0,0],[0,1,0,0],[0,0,1,0],[0,0,0,1]]
console.log(zombieCluster(a));