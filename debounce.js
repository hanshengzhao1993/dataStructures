var log = function (name) {
  console.log('Hi ' + name);
}


var debounce = function (func, wait) {
  var timeout;
  return function () {
    var args = arguments, context = this;
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      func.apply(context, args);
    }, wait);
  }
}

var testingDebounce = debounce(log, 200);


testingDebounce('Han')
testingDebounce('Emily')
testingDebounce('Ngu')
testingDebounce('Hercules') 