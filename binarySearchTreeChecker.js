var BinaryTree = function (value) {
  this.value = value;
  this.left = this.right = null;
};
BinaryTree.prototype.BSTchecker = function () {
  var binarySearchTree = true;

  // check right
  if(this.right){
    if(this.value < this.right.value){

    } else {
      return false;
    }
  }


}

var newTree = new BinaryTree(8);
newTree.left = new BinaryTree(4);
newTree.right = new BinaryTree(10);
newTree.right.right = new BinaryTree(12);
newTree.left.left = new BinaryTree(2);
newTree.right.right.left = new BinaryTree(11);