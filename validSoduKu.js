var validSoduKu = function (board) {
  var boardLength = board.length;
  // check veritical
  for(var i = 0; i < boardLength; i++){
    if(!checkArray(board[i])){
      return false;
    }
  }

  console.log(board)

  // check horizontal
  for(var j =0; j < boardLength; j++){
    var tempArray = [];
    for(var n = 0; n < boardLength; n++){
      tempArray.push(board[n][j]);
    }
    if( !checkArray(tempArray) ){
      return false;
    }
  }

  // check mini squares
  var startCol = 0;
  var stopCol = 2;
  var startRow = 0;
  var stopRow = 2;

  while( stopCol <= 8 && stopRow <= 8 ){


    var tempArray1 = [];
    for(var i = startRow; i <= stopRow; i++){
      for(var j = startCol; j <= stopCol; j++){
        tempArray1.push(board[i][j]);
      }
    }
    if( !checkArray(tempArray1) ){
      return false;
    }
    startCol = startCol + 3;
    stopCol = stopCol + 3;

    if( startCol > 8 ){
      startRow = startRow + 3;
      stopRow = stopRow + 3;
      startCol = 0;
      stopCol = 2;
    }

    // break;

  }
  return true;

}


var checkArray = function (array) {
  var a = [1,2,3,4,5,6,7,8,9];
  var copyArray = Array.prototype.slice.call(array);

  copyArray.sort((a,b)=>{
    if(a> b){
      return 1;
    } else {
      return -1
    }
  })

  return JSON.stringify(a) === JSON.stringify(copyArray);
}


console.log(validSoduKu(validBoard));
console.log(validSoduKu(nonValid));

 d