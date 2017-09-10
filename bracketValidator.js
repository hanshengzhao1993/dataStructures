var bracketValidater = function (brackets) {
  var stack = [];
  var bracketLength = brackets.length;
  var openingBracket = {
    '(': '(',
    '[': '[',
    '{': '{'
  };
  var closingBracket = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for(var i = 0; i < bracketLength; i++){
    console.log(i, brackets[i], bracketLength)
    if(openingBracket[brackets[i]]){
      stack.push(brackets[i])
    }
    if(closingBracket[brackets[i]]){
      var popped = stack.pop();
      console.log(popped, closingBracket[brackets[i]])
      if(popped !== closingBracket[brackets[i]]){
        return false;
      }
    }
  }

  return stack.length === 0 ? true : false;
}

console.log(bracketValidater("{[]()}"))
console.log(bracketValidater('{[(])}'))
console.log(bracketValidater('{[}'))