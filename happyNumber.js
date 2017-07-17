/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
  var a = JSON.stringify(n);
  while(a !== 1){
    var array = a.split('');
    var temp = 0;
    for(var i = 0; i< array.length; i++){
      temp = temp + (parseInt(array[i]) * parseInt(array[i]));
    }
    if(temp === 1){
      return true
    }
  }
};