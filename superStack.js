'use strict';
var variable = ['12',
'push 4', 
'pop',
  'push 3',
  'push 5',
  'push 2',
  'inc 3 1',
  'pop',
  'push 1',
  'inc 2 2',
  'push 4',
  'pop',
  'pop'
]

var var2 = [
  '8',
  'push -36' ,
  'push 20',
  'pop',
  'push -9',
  'pop',
  'push -53',
  'pop',
  'inc 1 - 17'
]

var var3 = [
'8',
'push -36',
'push 20',
'pop',
'push -9']

function superStack(values) {
  console.log(values[0])
  for(let i = 0; i< values.length; i++){
    let split = values[i].split(' ');

    if(split[0] === 'push'){
      stack.push(parseInt(split[1]));
      console.log(stack[stack.length - 1]);
    }

    if(split[0] === 'pop'){
      stack.pop();
      if(stack.length === 0){
        console.log('EMPTY')
      } else {
        console.log(stack[stack.length - 1]);
      }
    }

    if(split[0] === 'inc'){
      if(split.length > 3){
        split[2] = split[2] + split[3];
      }
      for(let j = 0; j< split[1]; j++){
        stack[j] = stack[j] + (+(split[2]));
      }
      console.log(stack[stack.length - 1]);
    }
  }
  return stack;
}

// console.log(superStack(var2));
console.log(superStack(var3))