'use strict';
var bulbSwitch = function (num) {
  var bulbs = new Array(num);
  for(var i = 0; i< bulbs.length ; i++){
    bulbs[i] = false;
  };

  for(var j = 1; j <= bulbs.length; j++){
    console.log(bulbs,j)
    for(var n = 1; n <= bulbs.length; n++){
      if( n % j === 0 ){
        console.log('J===',j, 'I===', n,!bulbs[n] )
        bulbs[n - 1] = !bulbs[n -1];
      }
    }
  }

  return bulbs
}


console.log(bulbSwitch(3))
// console.log(bulbSwitch(4))
