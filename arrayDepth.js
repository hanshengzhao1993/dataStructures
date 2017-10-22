const deepestLevelArray = (array, level = 0) => {
  return array.reduce((acc, ele)=>{
    if(Array.isArray(ele)){
      const arrayDepth = deepestLevelArray(ele, level + 1);
      return arrayDepth >= acc ? arrayDepth: acc;
    } else {
      return level + 1 >= acc ? level + 1: acc;
    }
  },0)
}


console.log(deepestLevelArray([[[]]]))
console.log(deepestLevelArray([0,1,2,3]))
console.log(deepestLevelArray([[0],1,[[[[2]]]],3]))