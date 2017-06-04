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

}


let binaryTree = new BinaryTree(5);
binaryTree.push(3)
binaryTree.push(7)
binaryTree.push(2)
binaryTree.push(4)
binaryTree.push(6)
binaryTree.push(8)

// console.log(binaryTree);
console.log(binaryTree.breadthFirstSearch((ele)=>{console.log(ele)}))
// console.log(binaryTree.containsVal(3))