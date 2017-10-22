const getIntergerComplements = (num)=>{
  let number = 0;
  let binaryNum = num.toString(2);
  let newBinary = '';

  for(let i = 0; i < binaryNum.length; i++){
    newBinary += binaryNum[i] === '0' ? '1':'0';
  }
  return parseInt(newBinary, 2)
}

console.log(getIntergerComplements(50))
console.log(getIntergerComplements(100))