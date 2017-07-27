/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 // Start with sorted coins
var coinChange = function(coins, amount) {
  var copiedSum = amount;
  var count = 0;
  for(var i = coins.length; i> -1 ; i--) {
    // console.log(i)
    while(coins[i] <= copiedSum){
      copiedSum = copiedSum - coins[i]
      count++;
    }
  }
  return count;
};


console.log(coinChange([1,2,5], 11))