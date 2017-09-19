var throttle = function (func, wait) {
  var currentCalling = null;
  return function () {
    var args = arguments;
    var context = this;
    if(currentCalling === null){
      func.apply(context, args);
      currentCalling = true;
      setTimeout( (throttle)=>{throttle = false}, wait, currentCalling )
    }
  }
}

var log = function (name) {
  console.log('HI' + name)
}
var newThrottleCall = throttle(log, 300);

newThrottleCall('Kai');
newThrottleCall('Han');
newThrottleCall('J');
newThrottleCall('I');
newThrottleCall('H');
newThrottleCall('G');
newThrottleCall('B');

setTimeout(log.bind('DONEEE'), 300);