'use strict';
const two_sum = (arr, total, index)=> {
  let numberObject = {};
  for(var i = 0; i< arr.length; i++){
    if(index === undefined){
      if( numberObject[ total - arr[i] ] ){
        return true;
      }
      if( numberObject[total - arr[i]] === undefined){
        numberObject[arr[i]] = i;
      }
    } else {
      if(i === index){
        continue;
      } else {
        if( numberObject[ total - arr[i] ] ){
          return true;
        }
        if( numberObject[total - arr[i]] === undefined){
          numberObject[arr[i]] = i;
        }
      }
    }
  }
  console.log(numberObject);
  return false;
}

const three_sum = (arr, total)=> {
  for(var i = 0; i< arr.length ; i++){
    if( two_sum(arr, total - arr[i], i) ){
      return true;
    }
  }
  return false;
}

console.log(three_sum([1,2,3,4,5], 7)) // true

console.log(three_sum([1,2,3,4,5], 10)) // true

console.log(three_sum([1,2,3,4,5], 3)) // true


// console.log(two_sum([1,2,3,4,5], 7))

// console.log(two_sum([1,2,3,4,5], 10))

// console.log(two_sum([1,2,3,4,5], 3))