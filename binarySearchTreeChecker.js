var BinaryTree = function (value) {
  this.value = value;
  this.left = this.right = null;
};
BinaryTree.prototype.BSTchecker = function () {
  var binarySearchTree = true;

  // check right
  if(this.right){
    if(this.value < this.right.value){
      var leftSide = this.right.BSTchecker();
      if(!leftSide){
        binarySearchTree = false;
      }
    } else {
      return false;
    }
  }

  // left 
  if(this.left){
    if(this.value > this.left.value){
      var rightSide = this.left.BSTchecker();
      if(!rightSide){
        binarySearchTree = false;
      }
    } else {
      return false;
    }
  }
  return binarySearchTree;

}

var newTree = new BinaryTree(8);
newTree.left = new BinaryTree(4);
newTree.right = new BinaryTree(10);
newTree.right.right = new BinaryTree(12);
newTree.left.left = new BinaryTree(2);
newTree.right.right.left = new BinaryTree(11);
console.log(newTree.BSTchecker())