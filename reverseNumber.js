/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  if(x >= 0){
    return parseInt(x.toString().split('').reverse().join(''))
  } else {
    return parseInt('-'+x.toString().split('').reverse().join(''))
  }
};

console.log('123',reverse(123))


console.log('-123',reverse(-123))

console.log('0',reverse(0))