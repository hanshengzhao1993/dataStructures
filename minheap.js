'use strict'

 // parentIndex = Math.floor( (index - 1) / 2 )
 // childrenIndices = [index * 2 + 1, index * 2 + 2]

var minHeap = function () {
  this.heap = [];
}

minHeap.prototype.parentIndex = function (childIndex){
  return Math.floor( (childIndex - 1) / 2 );
}

minHeap.prototype.addNumberToHeap= function(val){
    this.heap.push(val);
    if(this.heap.length > 1) {
      var recurse = function(heap, currentNum) {
        console.log('getting into recursion')
        var newNumberIndex = heap.indexOf(currentNum);
        var parentNumber = heap[ Math.floor( (newNumberIndex - 1) / 2 ) ];

        console.log(newNumberIndex, parentNumber, currentNum)
        if( parentNumber > currentNum ) {
          var temp = heap[newNumberIndex];
          heap[newNumberIndex] = heap[Math.floor( (newNumberIndex - 1) / 2 )];
          heap[Math.floor( (newNumberIndex - 1) / 2 )] = temp;

          recurse( heap, heap[parentNumber] );
        } else {
          return;
        }

        // var newNumberIndex = this.heap.indexOf(val);
        // var parentNumber = this.parentIndex(newNumberIndex);
        // if(this.heap[newNumberIndex] < this.heap[parentNumber]){
        //   var temp = this.heap[newNumberIndex];
        //   this.heap[newNumberIndex] = this.heap[parentNumber];
        //   this.heap[parentNumber] = temp;
        // }
      }
      recurse(this.heap, val);
    }
  }

var heap = new minHeap();
heap.addNumberToHeap(7);
heap.addNumberToHeap(4);
heap.addNumberToHeap(1);
console.log(heap)

// class minHeap {
//   constructor(){
//     this.heap=[];
//   }
//   parentIndex(childIndex){
//     return Math.floor( (childIndex - 1) / 2 );
//   }
//   addNumberToHeap(val){
//     this.heap.push(val);
//     if(this.heap.length > 1) {
//       console.log('outside of recursing', this.heap)
//       console.log('outside of recusing this', this)

//       var recurse = function () {
//         console.log('what is this right now', this)
//         console.log('in recusing', this.heap)

//         var newNumberIndex = this.heap.indexOf(val);
//         var parentNumber = this.parentIndex(newNumberIndex);
//         if(this.heap[newNumberIndex] < this.heap[parentNumber]){
//           var temp = this.heap[newNumberIndex];
//           this.heap[newNumberIndex] = this.heap[parentNumber];
//           this.heap[parentNumber] = temp;
//         } else {
//           return;
//         }
//       }
//       recurse(this);
//     }
//   }
// }

