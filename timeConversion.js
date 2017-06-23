var timeConversion = function (str) {
  var amOrPm = str.slice(8);
  var time = str.slice(0,8);
  if(amOrPm === 'PM'){
    var splitTime = time.split(':');
    splitTime[0] = (+splitTime[0]) + 12
    console.log(splitTime)
    return splitTime.join(':'); 
  }

  return str.slice(0,8);

}



console.log(timeConversion('07:05:45PM'));

console.log(timeConversion('07:05:45AM'));