'use strict';
const isMatch = (text, pattern)=>{
  // case for no . or *
  if( !pattern.includes('.') && !pattern.includes('*') ){
    if(text.length === pattern.length){
      for(var i = 0; i< text.length; i++){
        if(text[i] !== pattern[i]){
          return false;
        }
      }
      return true;
    }else {
      return false;
    }
  } else {
  // with . && *
    var textIndex = 0;
    for(var n = 0 ; n < pattern.length; n++){
      // console.log('TEXTINDEX:', textIndex, "  N: ", n)
      if(pattern[n] === '*'){
        continue;
      }
      if( pattern[n + 1] === '*' ){
        // star case
        var letter = pattern[n];
        // if letter equals to text[index]
        if(letter === text[textIndex]){
          // console.log('both equal to each other');
          while(letter === text[textIndex]){
            // console.log('textIndex++', textIndex)
            textIndex++;
          }
        } else {
          continue;
        }
      }
      if(pattern[n] === '.'){
        textIndex++;

        continue;
      }
      if(pattern[n+1] !== '*'){
        if(pattern[n] !== text[textIndex]){
          return false;
        }
      }
      if(pattern[n] === text[textIndex]){
        textIndex++;
      }
    }

    if(textIndex === text.length){
      return true;
    }else {
      return false;
    }
    
  }

}

console.log(isMatch('aa','a') === false);
console.log(isMatch('abc','abc') === true)
console.log(isMatch('abc','a.c'))
console.log(isMatch('abbb', 'ab*'))
console.log(isMatch('acd', 'ab*c.'))

