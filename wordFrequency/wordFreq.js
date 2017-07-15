var fs = require('fs');

// console.log(fs);

fs.readFile('./words.txt', 'utf8', function (err, data) {
  if(err) throw err;
  console.log(data)
})