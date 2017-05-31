'use strict'

class StackMin{ 
  constructor() {
    this.count = 0;
    this.storage = {};
  }
  pop() {
    if(this.count > 0) {
      this.count--;
      var item = this.storage[this.count];
      delete this.storage[this.lastItemIndex];
      return item;
    }
  }
  push(val) {
    if(Object.keys(this.storage).length === 0) {
      var currentMin = val;
    } else {
      var currentMin = this.peak().mininum;
      if(val < currentMin) {
        currentMin = val;
      }
    }
    this.storage[this.count] = {
      value: val,
      mininum: currentMin
    };
    this.count++;
  }
  peak() {
    return this.storage[this.count - 1];
  }
  isEmpty() {
    if(this.size > 0) {
      return false;
    } else {
      return true;
    }
  }
  size() {
    return this.count;
  }
  mininum() {
    // console.log(this.count)
    return this.peak().mininum;
  }
}
