var throttle = function(func, limit) {
  var inThrottle;
  return function() {
    if(!inThrottle){
      
    }
  };
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