const maxDiff2 = (array) =>{
  let arrLength = array.length;
  let maxDiff = -1;
  let maxRight = array[arrLength - 1];

  for(let i = arrLength - 2; i >=0; i--){
    if(array[i] > maxRight){
      maxRight = array[i]
    } else {
      let diff = maxRight - array[i];
      if(diff > maxDiff){
        maxDiff = diff;
      }
    }
  }
  return maxDiff;
}

console.log(maxDiff2([2,3,10,2,4,8,1]));
console.log(maxDiff2([7,9,5,6,3,2]));
