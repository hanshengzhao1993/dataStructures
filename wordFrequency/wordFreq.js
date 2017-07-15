var fs = require('fs');

fs.readFile('./words.txt', 'utf8', function (err, data) {
  if(err) throw err;
  var arrayOfWords = data.split(' ');
  var obj = {};
  arrayOfWords.forEach(function (ele) {
    if(obj[ele] === undefined){
      obj[ele] = 1;
    } else {
      obj[ele]++;
    }
  })
  console.log(obj)
})