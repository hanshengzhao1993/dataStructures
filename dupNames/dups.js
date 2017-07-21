'use strict';
var fs = require('fs');

fs.readFile('dups.txt', 'utf8', function (err, data) {
  var splitData = data.split('\n');
  var splitDataAgain = splitData.map((ele)=>{
    var splitEle = ele.split(':');
    return splitEle;
  })
  console.log(splitDataAgain);
})

// console.log(fs);