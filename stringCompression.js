var stringCompression = function (string) {
  var count = 1;
  var answer = "";

  for(var i =0; i< string.length; i++) {
    console.log(i)
    if(string[i] === string[i+1]){
      count++;
    }
    if(string[i] !== string[i+1]) {
      answer = answer + string[i] + "" + count;
      count = 1;
    }
  }


  return answer;
}

// console.log(stringCompression('aabbccceeaaa'));

var matrixRotating = function (matrix) {
  var nonMatrix = matrix.reduce( (acc, val)=>{
    return acc.concat(val);
  },[])
  console.log('nonMatrix', nonMatrix)

  var answer = matrix.map( (ele)=>{
    return [];
  });

  console.log('answer array', answer);
  var count = 0;

  for(var i = matrix.length - 1; i >= 0; i--){

    for(var j=0; j<matrix.length; j++){

      console.log(j, i)
      answer[j][i] = nonMatrix[count];
      count++;
    }
  }

  return answer;
}

console.log('double rotation', matrixRotating(matrixRotating([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])))
// console.log(matrixRotating([[1,2,3],[4,5,6],[7,8,9]]))


var zeroMatrix = function (matrix) {
  var indexes = [];
  for(var i =0; i< matrix.length ; i++){
    for(var j =0; j< matrix[0].length; j++){
      if(matrix[i][j] === 0){
        indexes.push([i, j]);
      }
    }
  }

  var turnIntoZero = function(colIndex, rowIndex){
    for(var i =0; i< matrix.length ; i++){
      for(var j =0; j< matrix[0].length; j++){      
        if(i === colIndex || j === rowIndex){
          matrix[i][j] = 0;
        }
      }
    }
  }
  // return matrix;
  indexes.forEach((indexes)=>{
    turnIntoZero(indexes[0], indexes[1]);
  })

  return matrix;
  console.log(indexes);
}


var uniq = function (array) {
  var uniq = array[0]

  for(var i = 0; i< array.length; i++){
    if( array[i - 1] !== array[i] && array[i + 1] !== array[i]){
      uniq = array[i];
    }
  }

  return uniq
}

console.log(uniq([1,1,2,2,3,4,4]) === 3)
console.log(uniq([1,1,2,2,3,3,4,4,4,5]) === 5)
// console.log(zeroMatrix([[1,2,3],[4,5,0],[0,8,9]]));