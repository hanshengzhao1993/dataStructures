var swap = function (array, idx1, idx2) {
  var temp = array[idx1];
  array[idx1]= array[idx2];
  array[idx2] = temp;
}
var MaxHeap = function () {
  this.heap = [];
  this.count = 0;
};

MaxHeap.prototype.insert = function (value) {
  if(this.count === 0){
    this.heap.push(value);
    this.count++;
  } else {
    this.heap.push(value);
    this.count++;
    var currentIndex = this.count - 1;
    var parentIndex = Math.floor((currentIndex - 1)/ 2);
    while( this.heap[parentIndex] < this.heap[currentIndex] ){
      swap(this.heap, parentIndex, currentIndex); 
      if(parentIndex === 0){
        break;
      } else {
        currentIndex = parentIndex;
        parentIndex = Math.floor((currentIndex - 1)/ 2);
      }
    }
  }

}

MaxHeap.prototype.deleteMax = function () {
  swap(this.heap, this.count - 1, 0);
  var deletedValue = this.heap.pop();
  var currentIndex = 0;
  var leftChild = (currentIndex * 2) + 1;
  var rightChild = (currentIndex * 2) + 2;
  console.log('IN DELETE', this.heap)
  var maxChild = this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
  while( this.heap[currentIndex] > this.heap[leftChild] || this.heap[rightChild] ){
    swap(this.heap, currentIndex, maxChild);
    currentIndex = maxChild;
    leftChild = (currentIndex * 2) + 1;
    rightChild = (currentIndex * 2) + 2;
    maxChild = this.heap[leftChild] > this.heap[rightChild] ? leftChild : rightChild;
  }

  this.count --;
  return deletedValue;
}

var heap = new MaxHeap();
heap.insert(4);
heap.insert(5);
heap.insert(6);
heap.insert(8);
heap.insert(9);
heap.insert(2);
heap.insert(1);
heap.insert(11);
console.log(heap.deleteMax())

console.log(heap)

// var a = [1,2,3,4];
// swap(a, 1, 2)
// console.log(a);