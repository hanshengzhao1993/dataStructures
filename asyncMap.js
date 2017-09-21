var func1 = function(cb) { // Make AJAX call.
  setTimeout(function() { // Wait for the internet.
    cb({name: 'Bob'}); // Return response.
  }, 40);
};

var func2 = function(cb) {
  setTimeout(function() {
    cb({name: 'Jim'});
  }, 20);
};

var func3 = function(cb) {
  setTimeout(function() {
    cb({name: 'Eli'});
  }, 30);
};


var asyncMap = function (array,cb) {
  var answer = [];
  for(var i = 0; i< array.length; i++){
    array[i]( (value)=>{
      answer.push(value);
      if(answer.length === array.length){
        cb(answer);
      }
    })
  }
}



console.log(asyncMap([func1, func2, func3], function(result) {console.log(result)}))
