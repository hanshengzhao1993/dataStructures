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
      currentNode.left = new Node(value)
    } else {
      console.log('what is current left node:  ',currentNode.left);
      currentNode.left.push(value)
    }
  } 
  if(value > currentNode.value){
    if(currentNode.right === null){
      currentNode.right = new Node(value)
    } else {
      currentNode.right.push(value)
    }
  }
 }

}


class Node{
  constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
  }
};



let binaryTree = new BinaryTree(5);
binaryTree.push(3)
binaryTree.push(7)
binaryTree.push(2)

console.log(binaryTree);
console.log(binaryTree.left);