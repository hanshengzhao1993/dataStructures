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
    if(openingBracket[brackets[i]]){
      stack.push(brackets[i])
    }
    if(closingBracket[brackets[i]]){
      var popped = stack.pop();
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