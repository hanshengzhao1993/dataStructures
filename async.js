'use strict'
// Log the response from each action in ascending order. ie.
// Processed Action 1
// Processed Action 2
// ...
// Processed Action 5

function triggerActions(count) {
  // must call processAction
  let array = [];
  let callToRender = 1;
  for (let i = 1; i <= count; i++) {
    processAction(i, function(data) {
      array[i] = data;
      while (array[callToRender]) {
        console.log(array[callToRender]);
        callToRender++;
      };
    });
  }
}

function processAction(i, callback) {
  setTimeout(function() {
    callback("Processed Action " + i);
  }, Math.random()*2000);
}

triggerActions(5);