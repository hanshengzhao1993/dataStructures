var log = function (name) {
  console.log('Hi ' + name);
}


var debounce = function (func, wait) {
  var timeout;
  return function () {
    var args = arguments, context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args)
    }, wait);
  }
}



var debounceImmediate = function (func, wait, immediate) {
  var timeout;
  return function () {
    var args = arguments,context = this;
    var later = function () {
      timeout = null;
      if(!immediate){
        func.apply(context, args);
      }
    }
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if(callNow){
      func.apply(context, args)
    }
  }
} 

var testingDebounce = debounceImmediate(log, 200);
testingDebounce('Han')
testingDebounce('Emily')
testingDebounce('Ngu')
testingDebounce('Hercules') 
