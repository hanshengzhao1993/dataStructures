'use strict'

class BinaryTree{
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

  push(value){
  let currentNode = this;

  if(value < currentNode.value){
    if(currentNode.left === null){
      currentNode.left = new BinaryTree(value)
    } else {
      currentNode.left.push(value)
    }
  } else if (value > currentNode.value){
    if(currentNode.right === null){
      currentNode.right = new BinaryTree(value)
    } else {
      currentNode.right.push(value)
    }
  } else {
    return "Number Already Used"
  }
 }

 containsVal(value){
  let currentNode = this;
  if(currentNode.value === value){
    return true;
  }
  if(currentNode.value > value){
    if(currentNode.left === null){
      return false;
    }
    return currentNode.left.containsVal(value)
  }

  if(currentNode.value < value){
    if(currentNode.right === null){
      return false;
    }
    return currentNode.right.containsVal(value)
  }
 }
 breadthFirstSearch(cb){
  var queue = [];
  queue.push(this);
  while(queue.length){
    var node = queue.shift();
    if(node){
      cb(node.value)
    }
    if(node.left){
      queue.push(node.left)
    }
    if (node.right){
      queue.push(node.right)
    }
  }
 }
 preOrderTraversal(cb){
  var currentNode = this;
  if(currentNode.value){
    cb(currentNode.value)
    if(currentNode.left){
      currentNode.left.preOrderTraversal(cb);
    }
    if(currentNode.right){
      currentNode.right.preOrderTraversal(cb);
    }
  }
 }
 inOrderTraversal(cb){
  var currentNode = this;
  if(currentNode.left){
    currentNode.left.inOrderTraversal(cb);
  }
  cb(currentNode.value)

  if(currentNode.right){
    currentNode.right.inOrderTraversal(cb);
  }
 }
 postOrderTraversal(cb){
   var currentNode = this;
  if(currentNode.left){
    currentNode.left.postOrderTraversal(cb);
  }
  
  if(currentNode.right){
    currentNode.right.postOrderTraversal(cb);
  }
  currentNode.value(cb)
 }
 leastCommonAncestor(node1, node2, obj){
  obj = obj || {};
  var array = [];

  if(node1.parent === null && node2.parent=== null){
    return undefined;
  }

  if(node1.parent){
    if(obj[node1.parent]){
      return node1.parent
    }
    obj[node1.parent] = 1;
  }

  if(node2.parent){
    if(obj[node2.parent]) {
      return node2.parent
    }
    obj[node2.parent] = 1;
  }

  leastCommonAncestor(node1.parent, node2.parent, obj)
 }

 maxPathSum(){
  var currentSum = Number.NEGATIVE_INFINITY;
  var maxSum = Number.NEGATIVE_INFINITY;
  var currentNode = this;
  if(currentNode === null){
    return 0;
  }

  // var left = 

 }

 minDepth(){

  var currentNode = this;

  if(currentNode === null){
    return 0;
  }
  if(currentNode.right === null || currentNode.left === null){
    return 1;
  }
  if(currentNode.right && currentNode.left){
    if(currentNode.right.minDepth() <= currentNode.left.minDepth()){
      return currentNode.right.minDepth() + 1;
    } else {
      return currentNode.left.minDepth() + 1;
    }
  }
 }

 maxDepth(){
  var currentNode = this;

  if(currentNode === null){
    return 0;
  }
  if(currentNode.right === null && currentNode.left === null){
    return 1;
  }
  // if(currentNode.right || currentNode.left){
    if(!currentNode.right){
      return currentNode.left.maxDepth() + 1;
    }
    if(!currentNode.left){
      return currentNode.right.maxDepth() + 1;
    } 
    // if (currentNode.left && currentNode.right){
    // }
    return (Math.max(currentNode.right.maxDepth(), currentNode.left.maxDepth()) + 1);
  }

  balanceTree() {
    var currentNode = this;
    var arr = [];
    currentNode.inOrderTraversal(function (ele) {
      arr.push(ele)
    })
    var middleIndex = Math.floor((arr.length-1)/2); 
    var middle = arr[middleIndex];
    var self = this;
    self = new BinaryTree(middle);

    var recurse = function (arr) {
      if(arr.length > 0){
        var middleIndex = Math.floor((arr.length-1)/2); 
        var middle = arr[middleIndex];
        self.push(middle);
        recurse(arr.slice(middleIndex + 1))
        recurse(arr.slice(0, middleIndex))
      }
      return;
    }

    recurse(arr.slice(middleIndex + 1))
    recurse(arr.slice(0, middleIndex))

    // console.log('SELF AT FINAL FORM:  ', self)
    return self;
   // var recurse = function (arr) {
   //  var middle = arr[Math.floor(arr.length/2)];
   //  console.log(middle)
   // }
    
   // return recurse(arr);
  }
 // }

}


let binaryTree = new BinaryTree(4);
binaryTree.push(3)
binaryTree.push(5)
binaryTree.push(2)
binaryTree.push(1)
binaryTree.push(6)
binaryTree.push(7)
console.log('NOT BALANCED: ', binaryTree)
console.log('BALANCED:  ', binaryTree.balanceTree());
// console.log(binaryTree)
// console.log(binaryTree)
// console.log(binaryTree.inOrderTraversal((ele)=>{console.log(ele)}));
// console.log(JSON.stringify(binaryTree, null, 2));
// console.log('MAX DEPTH: ', binaryTree.maxDepth());
// console.log(binaryTree.breadthFirstSearch((ele)=>{console.log(ele)}))
// console.log(binaryTree.containsVal(3))