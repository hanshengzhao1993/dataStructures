const a = [8,4,2,6,9,10,12,1,0,-1];


const largest = (array,nth, large)=>{
  return array.sort((a,b)=>{
    if(large){
      return a > b ? 1 : -1;
    }
    return a > b ? -1 : 1;
  }).slice(0,nth)
}

console.log(largest(a, 3, true))
console.log(largest(a, 5, true))
console.log(largest(a, 2, true))

console.log(largest(a, 3, false))
console.log(largest(a, 5, false))
console.log(largest(a, 1, false))