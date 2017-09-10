var array = [[1],[[[[[[2]]]]]],3];


var flattenArray = function (arr) {
  return arr.reduce( (acc, ele)=>{
    if( Array.isArray(ele)){
      return acc.concat(flattenArray(ele));
    } else{
      return acc.concat(ele);
    }
  },[])
}

console.log(flattenArray(array));