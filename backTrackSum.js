'use strict';

var backTrackingSumString = function (str) {
  var startingValue = 0;

  var firstStringLength = 1;
  var firstString = str.slice(startingValue, firstStringLength);

  var secondStringLength = 1;
  var secondString = str.slice(startingValue + firstString.length, firstString.length + secondStringLength);

  var addedStringLength = 1;
  var addedString = str.slice(startingValue + firstString.length + secondString.length, firstString.length + secondStringLength + addedStringLength);

  var reverseString = str.split('').reverse().join('');

  while(firstString.length < Math.ceil(str.length/3)){

    if( addNums(firstString, secondString, addedString) ){
      // console.log('ADDED THE FIRST ONE');
      startingValue = firstStringLength;
      firstStringLength = 1;
      firstString = str.slice(startingValue, firstStringLength + startingValue);
      secondStringLength = 1;
      secondString = str.slice(startingValue + firstString.length, firstString.length + secondStringLength + startingValue);
      addedStringLength = 1;
      addedString = str.slice(startingValue + firstString.length + secondString.length, firstString.length + secondStringLength + addedStringLength + startingValue);
      // console.log('VALUES WHEN CORRECT', firstString, secondString, addedString);

      if( addNums( firstString, secondString, addedString ) ){
        continue;
      }

      var biggestLength = firstStringLength > secondStringLength ? firstStringLength : secondStringLength;
       while( addedString.length <= biggestLength){
        // increment the answer to check if it matches the added;
        addedStringLength++;
        addedString = str.slice(startingValue + firstString.length + secondString.length, firstString.length + secondStringLength + addedStringLength + startingValue);
        // console.log('GOT HERE 2?', firstString,'||', secondString,'||', addedString);
        var reversedWord = addedString.split('').reverse().join('');
        if( reverseString.indexOf(reversedWord) === 0 ){
          // here to increase the amount of the first index
          firstStringLength++;
          firstString = str.slice(startingValue, firstStringLength + startingValue);
          secondStringLength = 1;
          secondString = str.slice(startingValue + firstString.length, firstString.length + secondStringLength + startingValue);
          addedString = firstStringLength;
          addedString = str.slice(startingValue + firstString.length + secondString.length, firstString.length + secondStringLength + addedStringLength + startingValue);
          // console.log('INCREMENT FIRST NUM---------------1', firstString, secondString, addedString)
        }
      }

    } else {
      // console.log('DId not add up together')

      var biggestLength = firstStringLength > secondStringLength ? firstStringLength : secondStringLength;

      while( addedString.length <= biggestLength){
        // increment the answer to check if it matches the added;
        addedStringLength++;
        addedString = str.slice(startingValue + firstString.length + secondString.length, firstString.length + secondStringLength + addedStringLength);
        // console.log('GOT HERE?', firstString, secondString, addedString);

        // check if second string is shorter than first

        if( secondString.length < firstString.length ){
          // console.log('add to 2nd string..................')
          secondStringLength++;
          secondString = str.slice(startingValue + firstString.length, firstString.length + secondStringLength + startingValue);
          addedString = firstStringLength;
          addedString = str.slice(startingValue + firstString.length + secondString.length, firstString.length + secondStringLength + addedStringLength + startingValue);
          // console.log(firstString, secondString, addedString);


          var reversedWord = addedString.split('').reverse().join('');
          if( reverseString.indexOf(reversedWord) === 0 ){
            var firstReversedString = firstString.split('').reverse().join('');
            var secondReversedString = secondString.split('').reverse().join('');

            // console.log('FINAL WORD', firstString,'||', secondString,'||', addedString, reversedWord.length);
            // console.log(reverseString.indexOf(secondReversedString) - reversedWord.length, reverseString.indexOf(firstReversedString) - reversedWord.length - secondString.length)
            if( reverseString.indexOf(secondReversedString) - reversedWord.length === 0 ){
              // console.log('got in here?')
              // if( reverseString.indexOf(firstReversedString) - reversedWord.length - secondString.length === 0 ){
              //   return true;
              // }
              if(startingValue + firstString.length + secondString.length + addedString.length === str.length){
                // console.log('OMG it worked')
                return true;
              }
            }
            // console.log(reverseString,'-====', reverseString.indexOf(firstReversedString), firstReversedString)
            // console.log('====', reverseString.indexOf(secondReversedString), secondReversedString);
            continue;
          }

        }

        var reversedWord = addedString.split('').reverse().join('');
        if( reverseString.indexOf(reversedWord) === 0 ){
          // here to increase the amount of the first index
          firstStringLength++;
          firstString = str.slice(startingValue, firstStringLength + startingValue);
          secondStringLength = 1;
          secondString = str.slice(startingValue + firstString.length, firstString.length + secondStringLength + startingValue);
          addedStringLength = firstStringLength;
          addedString = str.slice(startingValue + firstString.length + secondString.length, firstString.length + secondStringLength + addedStringLength + startingValue);
          // console.log('INCREMENT FIRST NUM---------------2', firstString,'|', secondString,'addedString: ', addedString)
          break;
        }
      }
      // now to increase the secondStringLength
      secondStringLength++;
      secondString = str.slice(startingValue + firstString.length, firstString.length + secondStringLength + startingValue);

      // increase the addedString also
      biggestLength = firstStringLength > secondStringLength ? firstStringLength : secondStringLength;
      addedStringLength = secondStringLength;
      addedString = str.slice(startingValue + firstString.length + secondString.length, firstString.length + secondStringLength + addedStringLength + startingValue);
      // console.log('BEFORE JERE', addedStringLength,'||', addedString);
      // console.log('JERE?', firstString,'||',secondString,'||', addedString);

      var reversedWord = addedString.split('').reverse().join('');
      if( reverseString.indexOf(reversedWord) === 0 ){
        var firstReversedString = firstString.split('').reverse().join('');
        var secondReversedString = secondString.split('').reverse().join('');

        // console.log('FINAL WORD', firstString,'||', secondString,'||', addedString, reversedWord.length);

        if( reverseString.indexOf(secondReversedString) - reversedWord.length === 0 ){
          if( reverseString.indexOf(firstReversedString) - reversedWord.length - secondString.length === 0 ){
            if( addNums(firstString, secondString, addedString) ){
              return true;
            } else {
              return false;
            }
          }
        }
        // console.log(reverseString,'-====', reverseString.indexOf(firstReversedString), firstReversedString)
        // console.log('====', reverseString.indexOf(secondReversedString), secondReversedString);
        continue;
      }

      // console.log(firstString.length)

    }
        
  }
  
  return false;
}

var addNums = function (a, b, c) {
  // console.log(a, b, c);
  return (+a) + (+b) === (+c);
}
console.log(backTrackingSumString("12243660"));
console.log(backTrackingSumString("1111112223"));
console.log(backTrackingSumString("2368"));
console.log(backTrackingSumString('1122335588'));