const biggestContinousArray = (array) =>{
  let result = Number.NEGATIVE_INFINITY;
  let biggestSoFar = 0;
  for(let i = 0; i < array.length; i++){
    biggestSoFar = biggestSoFar + array[i];
    if(biggestSoFar > result){
      result = biggestSoFar;
    }
    if(biggestSoFar < 0){
      biggestSoFar = 0;
    }
  }
  return result;
}

console.log(biggestContinousArray([-2,-3,4,-1,-2,1,5,-3]));
console.log(biggestContinousArray([1,2,3,-4]));