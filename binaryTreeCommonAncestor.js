var BinaryTree = function (value) {
  this.value = value;
  this.left = this.right = null;
};


BinaryTree.prototype.commonAncestory = function (val1, val2) {
  if(this.value === null){
    return null;
  }
  if(this.value === val1 || this.value === val2){
    return this;
  }

  var leftTree = this.left.commonAncestory(val1, val2);
  var rightTree = this.right.commonAncestory(val1, val2);

  if(leftTree && rightTree){
    return this;
  }
  return leftTree === null ? rightTree : leftTree;
}


var newTree = new BinaryTree(1);
newTree.left = new BinaryTree(2);
newTree.right = new BinaryTree(3);
newTree.left.left = new BinaryTree(4);
newTree.left.right = new BinaryTree(5);
newTree.right.left = new BinaryTree(6);
newTree.right.right = new BinaryTree(7);
// console.log(newTree);
console.log(newTree.commonAncestory(2,3))