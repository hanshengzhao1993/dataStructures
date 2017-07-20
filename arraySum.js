var nums = [-2, 0, 3, -5, 2, -1];

var numsSum = function (start, stop) {
  var count = 0
  for(var i = start; i <= stop; i++){
    count = count + nums[i];
  }
  return count;
}