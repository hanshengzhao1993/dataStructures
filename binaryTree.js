"use strict"
var BinaryTree = function (value) {
  this.value = value;
  this.left = this.right = null;
};

BinaryTree.prototype.BFS = function (cb) {
  var queue = [];

  queue.push(this);
  // console.log('queue: ', queue)
  while(queue.length){
    var node = queue.shift();
    // console.log(node)
    if(node.left){
      queue.push(node.left)
    }
    if(node.right){
      queue.push(node.right);
    }
    cb(node.value);
  }
}

BinaryTree.prototype.inOrderTraversal = function (cb) {
  var currentNode = this;
  if(currentNode.left){
    currentNode.left.inOrderTraversal(cb);
  }
  cb(currentNode.value);

  if(currentNode.right){
    currentNode.right.inOrderTraversal(cb);
  }
}

BinaryTree.prototype.preOrderTraversal = function (cb) {
  var currentNode = this;

  cb(currentNode.value);

  if(currentNode.left){
    currentNode.left.preOrderTraversal(cb);
  }

  if(currentNode.right){
    currentNode.right.preOrderTraversal(cb);
  }
}

BinaryTree.prototype.postOrderTraversal = function (cb) {
  var currentNode = this;
  if(currentNode.left){
    currentNode.left.postOrderTraversal(cb);
  }

  if(currentNode.right){
    currentNode.right.postOrderTraversal(cb);
  }
  cb(currentNode.value);
}
BinaryTree.prototype.maxContinousSum = function () {
  var currentNode = this;
  var max = [Math.NEGATIVE_INFINITY]
  // var leftNodeValues = [currentNode.value];
  // var rightNodeValues = [currentNode.value];

  var recurseNode = function (node, max) {
    if(node === null){
      return 0;
    }

    var left = recurseNode(node.left, max);
    var right = recurseNode(node.right, max);
    var maxPathAcrossRootNotToParent = node.value + left + right;
    var maxPathAcrossRootToParent = Math.max(node.value, node.value + Math.max(left, right));

    max[0] = Math.max(max[0], maxPathAcrossRootNotToParent, maxPathAcrossRootToParent);
    
    return maxPathAcrossRootToParent;
  }

  recurseNode(currentNode, max);

  return max[0];
}

var tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(6);
tree1.right = new BinaryTree(3);
tree1.left.left = new BinaryTree(4);
tree1.left.right = new BinaryTree(5);

// tree1.right.right = node(7);
// tree1.right.left = node(6);
// tree1.right.right.right = node(4);
// console.log(JSON.stringify(tree1, null , 2));
// console.log(tree1.BFS( (ele)=>{console.log(ele)} ))
// console.log(tree1.postOrderTraversal( (ele)=>{console.log(ele)} ))

// console.log(tree1.maxContinousSum())


var specialIndex = function (array, currentIndex, max, low) {
  max = max || array.length;
  low = low || 0;
  currentIndex = currentIndex || Math.floor(array.length/2)
  console.log('curentindex: ', currentIndex, max , low);
  if(currentIndex === max || currentIndex === low ){
    return -1;
  }
  if( currentIndex === array[currentIndex] ){
    console.log('returning answer: ', currentIndex)
    return currentIndex;
  } 
  if (currentIndex > array[currentIndex]){
    return specialIndex(array, Math.floor((max + currentIndex) / 2), array.length - 1, currentIndex );
  }
  if (currentIndex < array[currentIndex]){
    return specialIndex(array, Math.floor((low + currentIndex)/ 2), currentIndex - 1, 0  );
  }
}


// console.log(specialIndex([-22, -11, 0 , 3 , 9]));
// console.log(specialIndex([-22, -11, 0 , 3 , 9]) === 3);

console.log(specialIndex([-10,-9, 2,4,30,40,60]))













