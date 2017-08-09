var treeNode = function (value) {
  this.value = value;
  this.children = [];
}

var BinaryTreeNode = function(value){
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.push = function(val){
  var currentNode = this;

  if( val < currentNode.value ){
    if(currentNode.left === null){
      currentNode.left = new BinaryTreeNode(val);
    } else {
      currentNode.left.push(val)
    }
  } else {
    if(currentNode.right === null){
      currentNode.right = new BinaryTreeNode(val);
    } else {
      currentNode.right.push(val)
    }
  }
};

BinaryTreeNode.prototype.includeVal = function (val) {
  var currentNode = this;
  if(currentNode.value === val){
    return true;
  } 
  if(currentNode.value > val){
    if(currentNode.left === null){
      return false;
    }
    return currentNode.left.includeVal(val)
  }else {
    if(currentNode.right === null){
      return false;
    }
    return currentNode.right.includeVal(val)
  }
};


BinaryTreeNode.prototype.bfs = function(cb){
  var nodesInQueue = [];
  nodesInQueue.push(this);

  while(nodesInQueue.length){
    var currentNode = nodesInQueue.shift();
    if(currentNode){
      cb(currentNode.value)
    }
    if(currentNode.left){
      nodesInQueue.push(currentNode.left)
    }
    if(currentNode.right){
      nodesInQueue.push(currentNode.right)
    }
  }
}

BinaryTreeNode.prototype.preorderTraversal = function(cb){
  var currentNode = this;
  if(currentNode.value){
    cb(currentNode.value)
    if(currentNode.left){
      currentNode.left.preorderTraversal(cb);
    }
    if(currentNode.right){
      currentNode.right.preorderTraversal(cb);
    }
  }
}

BinaryTreeNode.prototype.inOrderTraversal = function(cb){
  var currentNode = this;
  
  if(currentNode.left){
    currentNode.left.inOrderTraversal(cb)
  }

  cb(currentNode.value)
  
  if(currentNode.right){
    currentNode.right.inOrderTraversal(cb);
  }
}

// BinaryTreeNode.prototype.postOrderTraversal = function(cb){
//   var currentNode = this;
  
//   if(currentNode.left){
//     currentNode.left.postOrderTraversal(cb)
//   }
//   if(currentNode.right){
//     currentNode.right.postOrderTraversal(cb);
//   }

//   cb(currentNode.value)
  
// }


var newTree = new treeNode(1);
newTree.children[0] = new treeNode(2);
newTree.children[1] = new treeNode(3);
newTree.children[2] = new treeNode(4);
newTree.children[0].children[0] = new treeNode(5)
newTree.children[0].children[1] = new treeNode(6)
newTree.children[0].children[2] = new treeNode(7)




























