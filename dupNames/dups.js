'use strict';
var fs = require('fs');

fs.readFile('dups.txt', 'utf8', function (err, data) {
  var splitData = data.split('\n');
  var splitDataAgain = splitData.map((ele)=>{
    var splitEle = ele.split(':');
    return splitEle;
  })
  var obj = {};

  splitDataAgain.forEach( (ele)=>{
    if(obj[ele[1]] === undefined){
      obj[ele[1]] = {
        data: ele,
        count: Object.keys(obj).length
      }
    }
  });
  console.log(splitDataAgain);
  console.log(obj)
})

// console.log(fs);