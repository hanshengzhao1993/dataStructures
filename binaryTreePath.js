var BinaryTree = function (value) {
  this.value = value;
  this.left = this.right = null;
};

BinaryTree.prototype.findPath = function (val, path) {
  path = path || [];
  if(this === null){
    return;
  } else {
    path.push(this.value);
  // console.log(path)
    if(this.value === val){
      return path;
    }
    if(this.left === null && this.right === null){
      path.pop();
      return path;
    }
  }
  if(this.left){
    var left = this.left.findPath(val, path);
    if(left.length > 1){
      if(left[left.length - 1] === val){
        return left;
      }
    }
  }

  // should take out 4 at this point trying to figure it out

  if(this.right){
    // this.right.findPath(val, path);
     var right = this.right.findPath(val, path);
    if(right.length > 1){
      if(right[right.length - 1] === val){
        return right;
      }
    }
  }
  path.pop();
  return path;
}



var newTree = new BinaryTree(8);
newTree.left = new BinaryTree(4);
newTree.right = new BinaryTree(10);
newTree.right.right = new BinaryTree(12);
newTree.left.left = new BinaryTree(2);
newTree.right.right.left = new BinaryTree(11);
// console.log(newTree)
console.log(newTree.findPath(2,[]));
console.log(newTree.findPath(12,[]));
console.log(newTree.findPath(11,[]));