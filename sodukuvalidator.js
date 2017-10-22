var sudoku_data = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];


const sudokuValidator = (board)=>{
  const comparingAns = JSON.stringify([1,2,3,4,5,6,7,8,9]);
  for(let i = 0; i < board.length; i++){
    // validate the rows
    if(!JSON.stringify(board[i].slice().sort()) === comparingAns){
      return false;
    }

    // validate the columns
    let columns = [];
    for(let n = 0; n < board.length; n++){
      if(columns.length === 9){
        if(!JSON.stringify(columns.sort()) === comparingAns){
          console.log(columns)
          return false;
        }
      }
    } 
  }
  // check the mini boxes

  var startingTop = 0;
  var stopingTop = 2;

  var startingLeft = 0;
  var stopingRight = 2;

  while(stopingTop <= 8){
    let box = [];
    for(let i = startingTop; i <= stopingTop; i++){
      for(let n = startingLeft; n <= stopingRight; n++){
        box.push(board[i][n]);
      }
    }
    if(!JSON.stringify(box.sort()) === comparingAns){
      return false;
    }
    startingLeft += 3;
    stopingRight += 3;
    if (stopingRight >= 9) {
      startingTop += 3;
      stopingTop +=3;
      startingLeft = 0;
      stopingRight = 2;
    }
  }
  return true;
  // columns

}

console.log(sudokuValidator(sudoku_data));