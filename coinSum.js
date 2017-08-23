/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

 // Start with sorted coins
'use strict'

var coins = [1,2,5,10,20,50,100,200];

var count = 0
var coinChange = function(amount) {
  //base case
  if (!amount) { count++; return; }

  //recursive case
  for (let coin of coins.filter(coin => coin <= amount))
    coinChange(amount - coin)
};

coinChange(3)
console.log(count)
