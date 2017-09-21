var func1 = function(cb) { // Make AJAX call.
  setTimeout(function() { // Wait for the internet.
    cb({name: 'Bob'}); // Return response.
  }, 400);
};

var func2 = function(cb) {
  setTimeout(function() {
    cb({name: 'Jim'});
  }, 200);
};

var func3 = function(cb) {
  setTimeout(function() {
    cb({name: 'Eli'});
  }, 300);
};


var asyncMap = function (array,cb) {
 
}



console.log(asyncMap([func1, func2, func3], function(result) {console.log(result)}))
