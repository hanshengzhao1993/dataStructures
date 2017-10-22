

var findIslands = function (arr) {
  var count = 0;
  var falseArray = arr.map( (ele)=>{
    var newArray = new Array(ele.length);
    for(var i = 0; i< newArray.length; i++){
      newArray[i] = false;
    }
    return newArray;
  });

  var findCluster = function (binaryArray, falseArray, i, j) {
    console.log('------------------------- inside cluster ', i,j)
    var above = [i-1, j],
    bottom = [i+1, j],
    right = [i, j+1],
    left = [i, j-1];

    var totalArray = [above, bottom, right, left];
    var filteredArray = totalArray.filter( (ele)=>{
      if( ele[0] >= 0 && ele[0] < binaryArray.length ){
        if( ele[1] >= 0 && ele[1] < binaryArray[0].length ){
          return true;
        }
      }
    });

    // console.log(filteredArray)

    filteredArray.forEach( (ele)=>{
      // console.log(ele);

      if( binaryArray[ele[0]][ele[1]] === 1 && falseArray[ele[0]][ele[1]] === false){
        falseArray[ele[0]][ele[1]] = true;
        // console.log(falseArray)
        if(falseArray[ele[0]][ele[1]] === true){
          findCluster(binaryArray,falseArray, ele[0], ele[1]);
        }
      }

    })


  }


  for(var i = 0; i< arr.length; i++){
    for(var j = 0; j< arr[i].length; j++){
      if(arr[i][j] === 1 ){
        // found a 1`
        if(falseArray[i][j] === false){
          // know that it's false;
          count++;
          falseArray[i][j] = true;
          // now find if it has surrounding ones to be true
          findCluster(arr, falseArray, i, j)
        }
      }

      // now to check all the spaces around it
    }
  }

  return count;

}


console.log(findIslands(array))


























