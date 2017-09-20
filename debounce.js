var log = function (name) {
  console.log('Hi ' + name);
}


var debounce = function (func, wait) {
}




var testingDebounce = debounce(log, 200);
testingDebounce('Han')
testingDebounce('Emily')
testingDebounce('Ngu')
testingDebounce('Hercules') 




























// var debounceImmediate = function (func, wait, immediate) {
//   var timeout;
//   return function () {
//     var args = arguments,context = this;
//     var later = function () {
//       timeout = null;
//       if(!immediate){
//         func.apply(context, args);
//       }
//     }
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if(callNow){
//       func.apply(context, args)
//     }
//   }
// } 

