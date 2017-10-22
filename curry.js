const add = (a,b)=>a+b;

var curry = (func)=>{
 var curried = function (...args) {
  if(args.length >= 2){
    return func.apply(this, args);
  } else {
    return function (...args2) {
      return curried(...args.concat(args2))
    }
  }
 }
 return curried;
}


var added = curry(add);
console.log(added()()()()(1)()()()()(54));