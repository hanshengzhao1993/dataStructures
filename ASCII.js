var asciiCode = function (str1, str2) {
  var string1 = str1.split('');
  var string2 = str2.split('');

  var obj = {};
  var list = [];
  var total = 0;

  for(var i = 0; i< str1.length ; i++){
    if(obj[str1[i]] === undefined){
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]]++;
    }
  }

  for(var n =0; n< str2.length; n++){
    if(obj[str2[n]] === undefined){
      list.push(str2[n])
    }else {
      obj[str2[n]]--;
    }
  }
  for(var key in obj){
    while(obj[key] > 0){
      list.push(key)
      obj[key]--;
    }
  }

  return list.reduce( function(acc, val){ acc = acc + val.charCodeAt(0); return acc }, 0)
}


console.log(asciiCode('catt', 'carr'))