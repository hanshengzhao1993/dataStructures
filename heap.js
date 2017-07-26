'use strict';
let childrenIndex = function (index){
  return [(index * 2) + 1, (index * 2) + 2]
}

let parentIndex = function (index, array) {
  if(index === 0){
    return null;
  } else {
    return Math.floor((index - 1)/ 2)
  }
}

var MinHeaps = function () {
  this.heap = [];
}

MinHeaps.prototype.insert = function (val) {
  this.heap.push(val);
  let currentIndex = this.heap.length - 1;
  let parent = parentIndex(currentIndex, this.heap);
  if(parent !== null){
    while(this.heap[parent] > val){
      var temp = this.heap[parent];
      this.heap[parent] = this.heap[currentIndex];
      this.heap[currentIndex] = temp;
      //Adjust new values
      currentIndex = parent;
      val = this.heap[currentIndex];
      parent = parentIndex(currentIndex, this.heap)
    }
  }
}


MinHeaps.prototype.peak = function () {
  this.heap[0]
}



MinHeaps.prototype.extract = function () {
  var min = this.heap[0];
  var lastValue = this.heap[this.heap.length - 1];
  var temp = this.heap[0];
  this.heap[0] = this.heap[this.heap.length - 1];
  this.heap[this.heap.length - 1] = temp;
  var extraction = this.heap.pop();
  var currentIndex = 0;

  var children = childrenIndex(0)
  var smallest = this.heap[(children[0])] < this.heap[(children[1])] ? children[0] : children[1]; 

    // console.log(this.heap)
  while( this.heap[currentIndex] > this.heap[smallest] ){
    // console.log(this.heap[currentIndex], this.heap[smallest])
    var tempVal = this.heap[currentIndex];
    this.heap[currentIndex] = this.heap[smallest];
    this.heap[smallest] = tempVal;


    // console.log('should be where the 6 should be', smallest)
    currentIndex = smallest;
    children = childrenIndex(smallest);
    smallest = this.heap[(children[0])] < this.heap[(children[1])] ? children[0] : children[1];
  }
  return extraction;
}

var newHeap = new MinHeaps;

newHeap.insert(2)
newHeap.insert(3)
newHeap.insert(4)
newHeap.insert(-5)
newHeap.insert(1)
newHeap.insert(0)
newHeap.insert(100)
console.log('MIN: ',newHeap.extract())
console.log('MIN: ',newHeap.extract())
console.log('MIN: ',newHeap.extract())
console.log(newHeap)