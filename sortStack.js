'use strict'
class SetofStacks {
  constructor(maxSize){
    this.max = maxSize;
    this.stacks = [[]];
  }
  pop() {
    console.log(this.stacks)
    if (this.stacks[this.stacks.length -1].length > 0) {
      var temp = this.stacks[this.stacks.length -1].pop();
    } else {
      this.stacks.pop();
      var temp = this.stacks[this.stacks.length - 1].pop();
    }
    console.log(temp);
    return temp;
  }
  push(val) {
    console.log(this.stacks[this.stacks.length -1])
    if (this.stacks[this.stacks.length - 1].length < this.max) {
      this.stacks[this.stacks.length - 1].push(val);
    }else {
      this.stacks.push([val]);
    }
    // this.stacks.forEach((ele,idx)=>{
    //   if(ele.length < this.max){
    //   } else {
    //     console.log('when am i coming in here :',val )
    //     this.stacks.push([val]);
    //   }
    // })
  }
}