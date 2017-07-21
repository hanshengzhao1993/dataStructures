'use strict';
var fs = require('fs');

fs.readFile('dups.txt', 'utf8', function (err, data) {
  var splitData = data.split('\n');
  console.log(splitData);
})

// console.log(fs);