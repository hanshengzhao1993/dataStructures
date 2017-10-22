var throttle = function(func, limit) {
  var inThrottle;
  return function () {
    if(!inThrottle){
      func.apply(this,arguments)
      inThrottle = true;
      setTimeout( (
        inThrottle = false
      )=>{}, limit )
    }
    console.log(inThrottle, arguments)
  }
};

var log = function (name) {
  console.log('HI ' + name)
}
var newThrottleCall = throttle(log, 5);
var a = new Date();

newThrottleCall('Kai');
newThrottleCall('Han');
newThrottleCall('J');
newThrottleCall('I');
newThrottleCall('H');
newThrottleCall('G');
newThrottleCall('B');

// var inThrottle = false;
  // return function() {
  //   var args = arguments, context = this;
  //   if(!inThrottle){
  //     func.apply(context, args)
  //     inThrottle = true;
  //     setTimeout(function() {
  //       return inThrottle = false;
  //     }, limit);
  //   }
  // };