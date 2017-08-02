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

BinaryTree.prototype.iterativeInOrderTraversal = function (cb, node) {
  node = node || this;
  var stack = [];
  while(stack.length || node ){
    if(node){
      stack.push(node);
      node = node.left;
    } else {
      var popped = stack.pop()
      cb(popped.value)
      if(popped.right){
        stack.push(popped.right);
      }
    }
  }
}

BinaryTree.prototype.interativeInOrder = function (cb) {
  var node = this;
  var stack = [];
  while (stack.length || node){
    if(node){
      stack.push(node);
      node = node.left;
    } else {
      var popped = stack.pop();
      cb(popped.value)
      if(popped.right){
        stack.push(popped.right)
      }
    }
  }
}

BinaryTree.prototype.interativePostOrder = function (cb) {
  var node = this;
  var stack = [];

  while(stack.length || node){
    if(node){
      stack.push(node);
      node = node.right;
    } else {
      var popped = stack.pop();
      cb(popped.value);
      if(popped.left){
        stack.push(popped.left)
      }
    }
  }
}

BinaryTree.prototype.findMaxDepth = function () {
  var node = this;
  var queue = [];
  var tempQueue = [];
  var count = 0;

  queue.push(node);

  while(queue.length){
    queue.forEach((ele)=>{
      if(ele.right){
        tempQueue.push(ele.right)
      }
      if(ele.left){
        tempQueue.push(ele.left)
      }
    })
    queue = JSON.parse(JSON.stringify(tempQueue))
    tempQueue = [];
    console.log('QUEUE: ', queue, 'TEMPQUEUE: ', tempQueue, count)
    count++;
  }
  return count;
};

BinaryTree.prototype.findCommonAncestor = function () {

}

// BinaryTree.prototype.findPath = function (nodeValue, path) {
//   path = path || [];
//   var currentNode = this;
//   if(this === null){
//     return;
//   }
//   if(this.value === nodeValue){
//     return path;
//   } 
//   if(currentNode.left){
//     console.log('went left')
//     this.findPath(currentNode.left, path.concat(currentNode.value));
//   }
//   if(currentNode.right){
//     console.log('went right')
//     this.findPath(currentNode.right, path.concat(currentNode.value));
//   }
// }

var findPath = function (rootNode ,nodeValue, path) {
  path = path || [];
  if(rootNode.value === nodeValue){
    return path;
  } 
  if(rootNode.left){
    var tempAnswer = findPath(rootNode.left,nodeValue, path.concat(rootNode.value));
    if(tempAnswer){
      return tempAnswer
    }
    // return tempAnswer !== undefined ? tempAnswer : undefined;
  }
  if(rootNode.right){
    var tempAnswerRight = findPath(rootNode.right,nodeValue, path.concat(rootNode.value));
    if(tempAnswerRight){
      return tempAnswerRight
    }
    // return tempAnswerRight !== undefined ? tempAnswerRight : undefined;
    // return findPath(rootNode.right,nodeValue, path.concat(rootNode.value)) ;
  } 
  // else {
  //   console.log('ELSE:', rootNode, path)
  // }
  // return path;
}

var tree1 = new BinaryTree(1);
tree1.left = new BinaryTree(5);
tree1.right = new BinaryTree(2);
tree1.right.left = new BinaryTree(3)
tree1.right.right = new BinaryTree(4);
tree1.right.right.right = new BinaryTree(100);
// tree1.left.left = new BinaryTree(6);
// tree1.left.right = new BinaryTree(7);

// tree1.right.right = node(7);
// tree1.right.left = node(6);
// tree1.right.right.right = node(4);
// console.log(JSON.stringify(tree1, null , 2));
// console.log(tree1.interativePostOrder( (ele)=>{console.log(ele)} ))
// console.log(tree1.interativeInOrder( (ele)=>{console.log(ele)} ))
// console.log(tree1.findMaxDepth())
console.log(findPath(tree1, 3, []))










