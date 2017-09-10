var loadingBar = document.getElementById('progressBar');
var loadingBarPercentage = 0;
var loadingTime = 3000; // 3 sec
var intervalTime = 100;
var everyInterval = (intervalTime/ loadingTime) * 100;
var startingInterval = setInterval( func, intervalTime);
function func(){
  loadingBarPercentage += everyInterval;
  var percentageLoading = loadingBarPercentage + '%';
  loadingBar.style.width = percentageLoading;
  if( loadingBarPercentage >= 100 ){
    loadingBar.style.width = '100%';
    clearInterval(startingInterval)
  }
}
