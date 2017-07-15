/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  var obj = {};
  nums.forEach( function (ele) {
    if(obj[ele] === undefined){
      obj[ele] = ele;
    } else {
      return obj[ele]
    }
  })
};